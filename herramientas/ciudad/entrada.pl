# Arma la entrada de fotos2.pl (id, nombre, cat, sub, dirección, lat, lon, tieneFoto) desde un archivo de lugares y uno de coordenadas.
use strict; use warnings; use utf8; use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)';
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
my %c;
open my $C, '<:encoding(UTF-8)', $ARGV[1] or die; while (<$C>) { $c{$1} = [$2, $3] if /"([^"]+)": \[([-\d.]+), ([-\d.]+)\]/; } close $C;
my $s = do { open my $L, '<:encoding(UTF-8)', $ARGV[0] or die; local $/; <$L> };
while ($s =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (?:F|"(?:[^"\\]|\\.)*"), "((?:[^"\\]|\\.)*)"/mg) {
  my ($cat, $sub, $n, $a) = ($1, $2, $3, $4); my $id = slug($n); my $k = $c{$id} || ["", ""];
  print join("\t", $id, $n, $cat, $sub, $a, @$k, 0), "\n";
}
