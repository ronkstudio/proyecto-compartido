# Port de app/i18n/fuentes/armar-dict.js a perl (en esta compu no hay Node). Mismo resultado byte a byte.
# Uso: perl armar-dict.pl <ruta a app/i18n/fuentes> todos|pt
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my ($trad, $arg) = @ARGV;
my $app = "$trad/../..";
sub texto { my $f = shift; return "" unless -f $f; open my $h, '<:raw', $f or die; local $/; my $s = <$h>; close $h; utf8::decode($s); return $s; }
sub leer { my $f = shift; return () unless -f $f; my $s = texto($f); $s =~ s/^\x{FEFF}//; return split /\r?\n/, $s, -1; }
sub esc { my $s = shift; $s =~ s/\\/\\\\/g; $s =~ s/"/\\"/g; return '"' . $s . '"'; }
sub jsonish { my $s = shift; my %m = ("\b"=>'\b', "\f"=>'\f', "\n"=>'\n', "\r"=>'\r', "\t"=>'\t');
  $s =~ s/([\\"\x00-\x1f])/$1 eq '\\' ? '\\\\' : $1 eq '"' ? '\\"' : exists $m{$1} ? $m{$1} : sprintf('\\u%04x', ord $1)/ge; return $s; }

# Ciudades desde data/ciudades.js
my $cj = texto("$app/data/ciudades.js");
my @CIUDADES;
while ($cj =~ /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)".*?files:\s*\[([^\]]*)\]/sg) {
  my ($id, $name, $fl) = ($1, $2, $3); my @files = $fl =~ /"([^"]+)"/g; push @CIUDADES, { id => $id, name => $name, files => \@files };
}
my %LISTAS = (caba => ["desc", "tip"]);
for my $c (@CIUDADES) { $LISTAS{$c->{id}} ||= [$c->{id}]; }
my @ordenListas = ("caba", grep { $_ ne "caba" } map { $_->{id} } @CIUDADES);

my (%datos, %usados);
for my $c (@CIUDADES) {
  my @f = ((map { "data/$_.js" } @{$c->{files}}), "data/hoy-$c->{id}.json");
  push @f, "data/hoy.json" if $c->{id} eq "caba";
  for (@f) { my $b = $_; $b =~ s{.*/}{}; $usados{$b} = 1; }
  $datos{$c->{id}} = join "\n", map { texto("$app/$_") } @f;
}
my @comun;
sub juntar { my $d = shift; return unless -d $d; opendir my $h, $d or die; my @e = sort grep { !/^\.\.?$/ } readdir $h; closedir $h;
  for (@e) { my $f = "$d/$_"; if (-d $f) { juntar($f) } elsif (/\.(js|html|json)$/) { push @comun, texto($f) } } }
juntar("$app/js");
push @comun, texto("$app/index.html");
push @comun, texto("$app/i18n/$_") for ("i18n.js", "es.js");
opendir my $dh, "$app/data" or die; for (sort readdir $dh) { next if /^\.\.?$/ || -d "$app/data/$_"; push @comun, texto("$app/data/$_") unless $usados{$_}; } closedir $dh;
my $COMUN = join "\n", @comun;
sub aparece { my ($blob, $k) = @_; return 1 if index($blob, $k) >= 0; return 1 if index($blob, jsonish($k)) >= 0; (my $q = $k) =~ s/'/\\'/g; return index($blob, $q) >= 0; }

sub claves { my $n = shift; return grep { length } leer("$trad/$n.txt"); }
my %fijas; for my $n (qw(ui extra hoy tags re)) { $fijas{$_} = 1 for claves($n); }
my (%enListas, @enOrden);
for my $id (@ordenListas) { for my $n (@{$LISTAS{$id}}) { for my $k (claves($n)) { push @enOrden, $k unless $enListas{$k}; $enListas{$k}{$id} = 1; } } }
my %ciudadDe;
for my $k (@enOrden) {
  my @ids = keys %{$enListas{$k}};
  next if $fijas{$k} || @ids > 1 || aparece($COMUN, $k);
  my $id = $ids[0];
  next if grep { $_ ne $id && aparece($datos{$_}, $k) } keys %datos;
  $ciudadDe{$k} = $id;
}

sub escribir { my ($f, $s) = @_; open my $h, '>:raw', $f or die "$f"; utf8::encode($s); print $h $s; close $h; }
sub armar {
  my $lang = shift; my (%d, @dk); my $problemas = 0;
  my $numeradas = sub {
    my $nombre = shift; my @k = claves($nombre); my @t = grep { length } leer("$trad/$lang.$nombre.txt");
    if (!@t) { print "$nombre : sin traducir\n"; return; }
    if (@t != @k) { print "$nombre : CANTIDAD DISTINTA (" . scalar(@t) . " de " . scalar(@k) . ")\n"; $problemas++; }
    my $n = 0;
    for my $i (0..$#t) {
      my $p = index($t[$i], "|");
      my ($num) = $t[$i] =~ /^\s*([+-]?\d+)/;
      if ($p < 1 || !defined $num || $num != $i + 1) { print "$nombre : numero mal en la linea " . ($i + 1) . "\n"; $problemas++; last; }
      my $v = substr($t[$i], $p + 1);
      if (length($v) > 0 && $i < @k && !exists $d{$k[$i]}) { $d{$k[$i]} = $v; push @dk, $k[$i]; $n++; }
    }
    print "$nombre : $n\n";
  };
  $numeradas->($_) for qw(ui extra desc tip hoy);
  for my $c (@CIUDADES) { $numeradas->($c->{id}) if $c->{id} ne "caba" && -f "$trad/$c->{id}.txt"; }
  my @tk = claves("tags"); my $tf = "$trad/$lang.tags.pipe";
  if (-f $tf) { my $s = texto($tf); $s =~ s/^\x{FEFF}//; $s =~ s/^[\s\x{FEFF}\x{A0}]+|[\s\x{FEFF}\x{A0}]+$//g; my @tt = split /\|/, $s, -1;
    if (@tt != @tk) { print "tags : CANTIDAD DISTINTA (" . scalar(@tt) . " de " . scalar(@tk) . ")\n"; $problemas++; }
    else { my $n = 0; for my $i (0..$#tk) { if (!exists $d{$tk[$i]}) { $d{$tk[$i]} = $tt[$i]; push @dk, $tk[$i]; $n++; } } print "tags : $n\n"; } }
  my @rk = claves("re"); my @rt = grep { length } leer("$trad/$lang.re.txt");
  if (@rt != @rk) { print "reglas : CANTIDAD DISTINTA (" . scalar(@rt) . " de " . scalar(@rk) . ")\n"; $problemas++; }
  my %partes = ("" => []); $partes{$_->{id}} = [] for @CIUDADES;
  for my $key (@dk) { push @{$partes{$ciudadDe{$key} // ""}}, esc($key) . ": " . esc($d{$key}) . ",\n"; }
  my $dir = "$trad/../dict";
  my $out = "/* Diccionario común '$lang'. Se arma solo con i18n/fuentes/armar-dict.js: no editar a mano.\n   Clave: texto en espanol tal como se ve en la app. Valor: traduccion. Los textos de una sola ciudad estan en $lang.<ciudad>.js. */\nwindow.I18N_FULL = {\n";
  $out .= join "", @{$partes{""}};
  $out .= "\"__re\": [\n";
  my @lin; my $m = @rk < @rt ? @rk : @rt;
  for my $i (0..$m-1) { push @lin, "[" . esc($rk[$i]) . ", " . esc($rt[$i]) . "]"; }
  $out .= join(",\n", @lin) . "\n]\n};\n";
  escribir("$dir/$lang.js", $out);
  my @res = ("$lang: común " . scalar(@{$partes{""}}));
  for my $c (@CIUDADES) {
    my $body = join "", @{$partes{$c->{id}}}; $body =~ s/,\n$/\n/;
    my $s = "/* Diccionario '$lang' de $c->{name}: textos que solo usa esta ciudad. Se arma solo con i18n/fuentes/armar-dict.js: no editar a mano. */\n" .
      "Object.assign(window.I18N_FULL = window.I18N_FULL || {}, {\n" . $body . "});\n";
    escribir("$dir/$lang.$c->{id}.js", $s);
    push @res, "$c->{id} " . scalar(@{$partes{$c->{id}}});
  }
  print join(", ", @res) . " (total " . scalar(@dk) . " textos), " . scalar(@lin) . " reglas, problemas: $problemas\n";
  return $problemas;
}
my @langs = $arg eq "todos" ? qw(en pt fr it de zh ja) : ($arg);
my $total = 0; $total += armar($_) for @langs;
exit($total ? 1 : 0);
