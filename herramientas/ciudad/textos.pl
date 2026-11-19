# Junta los textos de una ciudad que se ven en la app y todavía no están en ninguna lista de traducción.
# Uso: perl textos.pl <carpeta app> <id de la ciudad> > nuevos.txt  (un texto por línea, en el orden en que aparecen)
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my $app = shift; my $city = shift;
sub leer { my $f = shift; open my $h, '<:encoding(UTF-8)', $f or die $f; local $/; my $s = <$h>; close $h; $s =~ s/^\x{FEFF}//; $s }
sub core { my $s = shift; $s =~ s/\s+/ /g; $s =~ s/^\s+|\s+$//g; $s }
sub sinIconos { my $s = shift; $s =~ s/^[^\p{L}\p{N}¿¡\$]+//; $s =~ s/[^\p{L}\p{N}?!.)%°\$]+$//; $s }

# Lo que ya tiene traducción.
my %ya;
sub ciudades { my $app = shift; open my $h, '<:encoding(UTF-8)', "$app/data/ciudades.js" or die "no encuentro $app/data/ciudades.js"; local $/; my $s = <$h>; close $h; return $s =~ /\bid:\s*"([\w-]+)"/g; }
for my $n (qw(ui extra desc tip hoy tags), grep { $_ ne "caba" } ciudades($app)) {
  my $f = "$app/i18n/fuentes/$n.txt"; next unless -f $f;
  $ya{core($_)} = 1 for grep { length } split /\r?\n/, leer($f);
}

# Lo que no se traduce: nombres propios, direcciones, marcas, frases en el idioma local, búsquedas.
my %no;
my $lug = leer("$app/data/$city-lugares.js");
while ($lug =~ /^\s*\["\w+", "[^"]*", "((?:[^"\\]|\\.)*)", (?:F|"[^"]*"), "((?:[^"\\]|\\.)*)"/mg) { $no{$1} = 1; $no{$2} = 1; }
my $loc = leer("$app/data/$city-local.js");
while ($loc =~ /\["([^"]+)", "[^"]*", \d+, "[\w.]+"\]/g) { $no{$1} = 1; }           # apps
while ($loc =~ /\["ð", "([^"]+)"/g) { $no{$1} = 1; }                                # agencias
while ($loc =~ /\["📱", "([^"]+)"/g) { $no{$1} = 1; }                                # compañías de celular
my ($aer) = $loc =~ /aerolineas: \[(.*?)\n    \],/s; while ($aer =~ /\["([^"]+)", "https/g) { $no{$1} = 1; }
my ($fra) = $loc =~ /frases: \[(.*?)\n    \],/s; while ($fra =~ /\["([^"]+)", "/g) { $no{$1} = 1; }
my $zon = leer("$app/data/$city-zones.js");
while ($zon =~ /address: "([^"]+)"/g) { $no{$1} = 1; }
while ($zon =~ /\["[^"]+", "[^"]+", "([^"]+)"\]/g) { $no{$1} = 1; }                  # búsquedas "cerca mío" (3.º)

my (@out, %visto);
for my $f (@ARGV ? @ARGV : map { $_ eq "" ? $city : "$city-$_" } ("", qw(local zones extra hoy lugares))) {
  my $s = leer("$app/data/$f.js");
  $s =~ s/\bstations: \{.*//s;                       # estaciones: nombres propios
  $s =~ s{/\*.*?\*/}{}sg;                            # comentarios
  $s =~ s/^\s*const [A-Z]+ = "[^"]*";//mg;           # fuentes de la agenda
  $s =~ s/\b(?:q|updated|chipsBuscar|mapa|tz|currency|id|codigo|formato|idioma|hoy|color|lugar|fuente|cover|line)\s*:\s*"(?:[^"\\]|\\.)*"//g;
  $s =~ s/^\s*(?:synonyms|only|closed|quality|photos|diet)\s*:\s*\{.*?\n  \},?$//msg;
  while ($s =~ /"((?:[^"\\]|\\.)*)"/g) {
    my $t = $1; $t =~ s/\\"/"/g;
    next if $t =~ m{^(?:https?:|#/|data/|tel:)} || $t !~ /\p{L}/ || $t =~ /^[a-z0-9_.-]+$/ || $t eq "use strict" || $t =~ /^ℹ/;
    next if $no{$t};
    my $c = core($t);
    next if $ya{$c} || $ya{sinIconos($c)} || $visto{$c}++;
    # Si es "A · B" y todas las partes ya están, se traduce solo.
    if ($c =~ / · /) { my @p = split / · /, $c; next unless grep { !$ya{$_} && !$ya{sinIconos($_)} } @p; }
    push @out, $c;
  }
}
print "$_\n" for @out;
