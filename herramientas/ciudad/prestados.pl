# Textos que usa una ciudad y que solo están traducidos en la lista de OTRA ciudad (no en las comunes).
# Salen en formato "es || en || pt || fr || it || de || zh || ja" con la traducción de esa otra lista, para sumarlos con agregar.pl.
# Uso: perl prestados.pl <app> <ciudad> <lista de textos que usa la ciudad (uno por línea)>
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)';
my ($app, $city, $usa) = @ARGV;
my @langs = qw(en pt fr it de zh ja);
my $f = "$app/i18n/fuentes";
sub leer { my $p = shift; open my $h, '<:raw', $p or return (); local $/; my $s = <$h>; close $h; utf8::decode($s); $s =~ s/^\x{FEFF}//; return grep { length } split /\r?\n/, $s; }
my %comun; for my $n (qw(ui extra desc tip hoy tags)) { $comun{$_} = 1 for leer("$f/$n.txt"); }
my %propia = map { $_ => 1 } leer("$f/$city.txt");
my %tr;   # texto → [en, pt, ...] de la primera lista de ciudad que lo tenga
sub ciudades { my $app = shift; open my $h, '<:encoding(UTF-8)', "$app/data/ciudades.js" or die "no encuentro $app/data/ciudades.js"; local $/; my $s = <$h>; close $h; return $s =~ /\bid:\s*"([\w-]+)"/g; }
for my $c (grep { $_ ne "caba" } ciudades($app)) {
  next if $c eq $city;
  my @es = leer("$f/$c.txt"); next unless @es;
  my %col; for my $l (@langs) { my %m; for (leer("$f/$l.$c.txt")) { $m{$1} = $2 if /^(\d+)\|(.*)$/; } $col{$l} = \%m; }
  for my $i (0..$#es) { next if $tr{$es[$i]}; $tr{$es[$i]} = [map { $col{$_}{$i + 1} } @langs]; }
}
my $n = 0;
for my $t (leer($usa)) {
  next if $comun{$t} || $propia{$t} || !$tr{$t};
  next if grep { !defined } @{$tr{$t}};
  print join(" || ", $t, @{$tr{$t}}), "\n"; $n++;
}
print STDERR "$n textos prestados\n";
