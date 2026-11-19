# Ubica los lugares de Bogotá. Las direcciones colombianas ("Carrera 7 # 28-66" = sobre la Carrera 7, a la altura de la Calle 28)
# no las entiende Nominatim, así que: 1) busca cada lugar por nombre (hasta 8 candidatos);
# 2) arma con los candidatos que coinciden en la calle un modelo de la grilla (lat/lon según número de calle y de carrera);
# 3) se queda con el candidato más cerca de lo que predice la grilla para su dirección.
# Uso: perl geogrilla-bogota.pl bogota-lugares.js cache.json > geo.tsv  (para otra ciudad con grilla, cambiar la función grilla)
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP; use URI::Escape qw(uri_escape_utf8); use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)'; $| = 1;
my ($file, $cachef) = @ARGV;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 60);
my $cache = {};
if (-e $cachef) { open my $h, '<:raw', $cachef; my $t = do { local $/; <$h> }; $cache = decode_json($t); }
sub getj { my $u = shift; return $cache->{$u} if $cache->{$u}; my $r; for my $i (1..3) { $r = $http->get($u); last if $r->{success}; sleep 5 * $i; } sleep 1.1; return [] unless $r->{success}; my $j = eval { decode_json($r->{content}) } || []; $cache->{$u} = $j; return $j; }
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
sub dist { my ($a1,$o1,$a2,$o2) = @_; my $dx = ($o2-$o1)*cos($a1*3.14159/180)*111320; my $dy = ($a2-$a1)*110540; return sqrt($dx*$dx+$dy*$dy); }
sub plano { my $s = NFD(shift // ""); $s =~ s/\p{Mn}//g; return lc $s; }
# Dirección -> (calle, carrera) numéricas, o nada.
sub grilla {
  my $a = shift;
  return unless $a =~ /^(Calle|Carrera|Avenida Calle|Avenida Carrera|Avenida|Transversal|Diagonal|Ak|Ac)\s+(\d+)([A-Z]?)(?:\s+Bis)?(?:\s+Este)?\s*#\s*(\d+)([A-Z]?)/i;
  my ($tipo, $n1, $l1, $n2, $l2) = ($1, $2, $3, $4, $5);
  my $este = $a =~ /^\S+\s+\d+\w*\s+(?:Bis\s+)?Este/i ? -1 : 1;
  my $v1 = $n1 + ($l1 ? 0.4 : 0); my $v2 = $n2 + ($l2 ? 0.4 : 0);
  return ($tipo =~ /Carrera|Transversal/i) ? ($v2, $v1 * $este, "carrera $n1") : ($v1, $v2, "calle $n1");
}
my $src = do { open my $h, "<:encoding(UTF-8)", $file or die; local $/; <$h> };
my @L;
while ($src =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (F|"(?:[^"\\]|\\.)*"), "((?:[^"\\]|\\.)*)"/mg) {
  my ($cat, $sub, $name, $barrio, $addr) = ($1, $2, $3, $4, $5);
  my $fuera = $barrio eq "F";
  my $q = $name; $q =~ s/\s*\(.*?\)//g;
  my $u = "https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&limit=8&q=" . uri_escape_utf8($fuera ? "$q, Colombia" : "$q, Bogotá") . ($fuera ? "" : "&viewbox=-74.25,4.85,-73.98,4.45&bounded=1");
  my $r = getj($u);
  my @g = $fuera ? () : grilla($addr);
  push @L, { id => slug($name), cat => $cat, name => $name, addr => $addr, fuera => $fuera, c => $r, g => \@g };
}
open my $o, '>:raw', $cachef; print $o encode_json($cache); close $o;
# Calibración: candidatos cuyo texto nombra la calle principal de la dirección.
my @cal;
for my $p (@L) {
  next unless @{$p->{g}};
  my $calle = $p->{g}[2]; my ($t, $n) = split / /, $calle;
  for my $c (@{$p->{c}}) {
    my $d = plano($c->{display_name});
    if ($d =~ /\b$t $n\b/ || $d =~ /\b$n[a-z]?-\d+/ ) { push @cal, [$p->{g}[0], $p->{g}[1], $c->{lat}, $c->{lon}]; last; }
  }
}
# Mínimos cuadrados: lat = a + b*calle + c*carrera; lon igual.
sub ajuste {
  my $k = shift; my @m = (0) x 9; my @v = (0) x 3;
  for my $e (@cal) { my @x = (1, $e->[0], $e->[1]); for my $i (0..2) { $v[$i] += $x[$i] * $e->[$k]; for my $j (0..2) { $m[$i*3+$j] += $x[$i] * $x[$j]; } } }
  # Gauss
  my @A = map { [ @m[$_*3 .. $_*3+2], $v[$_] ] } 0..2;
  for my $i (0..2) { my $p = $A[$i][$i]; $_ /= $p for @{$A[$i]}; for my $j (0..2) { next if $j == $i; my $f = $A[$j][$i]; $A[$j][$_] -= $f * $A[$i][$_] for 0..3; } }
  return map { $A[$_][3] } 0..2;
}
die "pocos puntos para calibrar: " . scalar(@cal) . "\n" if @cal < 8;
my @fa = ajuste(2); my @fo = ajuste(3);
# Quitar puntos que no ajustan y recalcular una vez.
@cal = grep { dist($_->[2], $_->[3], $fa[0]+$fa[1]*$_->[0]+$fa[2]*$_->[1], $fo[0]+$fo[1]*$_->[0]+$fo[2]*$_->[1]) < 1500 } @cal;
@fa = ajuste(2); @fo = ajuste(3);
print STDERR "calibración con ", scalar(@cal), " puntos\n";
for my $p (@L) {
  my ($st, $lat, $lon, $nota) = ("nada", "", "", "");
  if (@{$p->{g}}) {
    my ($plat, $plon) = ($fa[0]+$fa[1]*$p->{g}[0]+$fa[2]*$p->{g}[1], $fo[0]+$fo[1]*$p->{g}[0]+$fo[2]*$p->{g}[1]);
    my ($best, $bd);
    for my $c (@{$p->{c}}) { my $d = dist($plat, $plon, $c->{lat}, $c->{lon}); ($best, $bd) = ($c, $d) if !defined $bd || $d < $bd; }
    if ($best && $bd < 700) { ($st, $lat, $lon) = ("ok", $best->{lat}, $best->{lon}); $nota = sprintf("%.0f m de la grilla · %s", $bd, $best->{display_name}); }
    elsif ($best) { ($st, $lat, $lon) = ("lejos", sprintf("%.5f", $plat), sprintf("%.5f", $plon)); $nota = sprintf("%.0f m de la grilla · %s,%s · %s", $bd, $best->{lat}, $best->{lon}, $best->{display_name}); }
    else { ($st, $lat, $lon) = ("grilla", sprintf("%.5f", $plat), sprintf("%.5f", $plon)); }
  } elsif (@{$p->{c}}) { my $c = $p->{c}[0]; ($st, $lat, $lon, $nota) = ("nombre", $c->{lat}, $c->{lon}, $c->{display_name}); }
  printf "%s\t%s\t%s\t%s\t%s\t%s\t%s\n", $p->{id}, $st, $lat, $lon, $p->{cat}, "$p->{name} | $p->{addr}", substr($nota, 0, 140);
}
