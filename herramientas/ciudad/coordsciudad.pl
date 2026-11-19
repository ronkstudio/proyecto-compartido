# Arma data/<ciudad>-coords.js con geo.tsv (primera pasada: id, estado, lat, lon) y fix.tsv (correcciones a mano, ganan).
# Uso: perl coordsciudad.pl <ciudad>-lugares.js geo.tsv fix.tsv <id> "<Nombre>" "<ids sin lugar fijo, separados por coma>" <tarjeta> > data/<ciudad>-coords.js
use strict; use warnings; use utf8; use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)';
my ($lug, $geo, $fix, $cid, $cname, $sinlist, $tarjeta) = @ARGV;
utf8::decode($cname);
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
my %rank = (ok => 4, nombre => 3, dir => 2, grilla => 2, lejos => 1, nada => 0);
my (%c, %r);
open my $g, '<:encoding(UTF-8)', $geo or die;
while (<$g>) { chomp; my @f = split /\t/; next unless @f >= 4 && defined $rank{$f[1]} && $f[2] ne ""; next if exists $r{$f[0]} && $r{$f[0]} >= $rank{$f[1]}; $r{$f[0]} = $rank{$f[1]}; $c{$f[0]} = [$f[2], $f[3]]; }
close $g;
open my $x, '<:encoding(UTF-8)', $fix or die;
while (<$x>) { chomp; my @f = split /\t/; next unless @f >= 3 && $f[1] =~ /^-?\d/; $c{$f[0]} = [$f[1], $f[2]]; $r{$f[0]} = 9; }
close $x;
# Tours sin punto fijo (y lugares sin ubicación confiable): no llevan ubicación.
my %sin = map { $_ => 1 } split(/,/, $sinlist);
my $src = do { open my $h, '<:encoding(UTF-8)', $lug or die; local $/; <$h> };
my @ids; while ($src =~ /^\s*\["\w+", "(?:[^"\\]|\\.)*", "((?:[^"\\]|\\.)*)", /mg) { my $n = $1; $n =~ s/\\"/"/g; push @ids, slug($n); }
print "/* Ubicación de los lugares de $cname (tarjeta #$tarjeta): CITY_COORDS.${cid}[id] = [lat, lon].\n";
print "   Salen de OpenStreetMap (Nominatim y Overpass, 18/11/2026): cada lugar se buscó por nombre\n";
print "   y se confirmó con la calle y el número de su dirección. Los tours sin punto fijo no tienen ubicación. */\n";
print "window.CITY_COORDS = window.CITY_COORDS || {};\nwindow.CITY_COORDS.$cid = {\n";
my @out; my ($sin, $falta) = (0, 0);
for my $id (@ids) {
  if ($sin{$id}) { $sin++; next; }
  unless ($c{$id}) { print STDERR "SIN UBICACIÓN: $id\n"; $falta++; next; }
  push @out, sprintf('  "%s": [%.5f, %.5f]', $id, $c{$id}[0], $c{$id}[1]);
}
print join(",\n", @out), "\n};\n";
print STDERR scalar(@ids), " lugares, ", scalar(@out), " con ubicación, $sin tours sin punto fijo, $falta sin dato\n";
