# Agrega textos nuevos a una lista de traducción existente (i18n/fuentes/<lista>.txt y <idioma>.<lista>.txt).
# Uso: perl agregar.pl <carpeta fuentes> <lista> <archivo "es || en || pt || fr || it || de || zh || ja">
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my ($dir, $lista, $in) = @ARGV;
my @langs = qw(en pt fr it de zh ja);
sub leer { my $f = shift; open my $h, '<:raw', $f or die $f; local $/; my $s = <$h>; close $h; utf8::decode($s); $s =~ s/^\x{FEFF}//; return grep { length } split /\r?\n/, $s; }
my @es = leer("$dir/$lista.txt"); my %ya = map { $_ => 1 } @es;
my @nuevos;
open my $h, '<:encoding(UTF-8)', $in or die; while (<$h>) { s/\r?\n$//; next unless length; my @c = split / \|\| /, $_, -1; die "columnas: $_" unless @c == 8; next if $ya{$c[0]}++; push @nuevos, \@c; } close $h;
sub agregar { my ($f, @l) = @_; open my $o, '>>:raw', $f or die; for (@l) { my $s = "$_\r\n"; utf8::encode($s); print $o $s; } close $o; }
my $n = @es;
agregar("$dir/$lista.txt", map { $_->[0] } @nuevos);
for my $i (0..$#langs) { my $k = $n; agregar("$dir/$langs[$i].$lista.txt", map { ++$k . "|" . $_->[$i + 1] } @nuevos); }
print scalar(@nuevos), " textos agregados a $lista (ahora ", $n + @nuevos, ")\n";
