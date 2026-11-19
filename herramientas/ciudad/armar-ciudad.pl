# Arma i18n/fuentes/<ciudad>.txt y <idioma>.<ciudad>.txt desde tr/*.txt (es || en || pt || fr || it || de || zh || ja).
# Controla: 8 columnas, sin repetidos, y que cada texto en castellano exista en la lista de textos de la app (todo.txt).
# Uso: perl armar-ciudad.pl <ciudad> <carpeta tr> <todo.txt: textos que usa la app> <carpeta de salida, i18n/fuentes>
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my ($city, $trdir, $todo, $out) = @ARGV;
die "Uso: perl armar-ciudad.pl <ciudad> <tr> <todo.txt> <salida>\n" unless $out;
my @langs = qw(en pt fr it de zh ja);
open my $t, '<:encoding(UTF-8)', $todo or die; my %enApp = map { chomp; ($_ => 1) } <$t>; close $t;
my (@es, %tr, %visto, $mal);
opendir my $dh, $trdir or die; my @fs = sort grep { /.txt$/ } readdir $dh; for my $f (map { "$trdir/$_" } @fs) {
  open my $h, '<:encoding(UTF-8)', $f or die;
  while (my $l = <$h>) {
    chomp $l; $l =~ s/\r$//; next unless length $l;
    my @c = split / \|\| /, $l, -1;
    if (@c != 8) { print "COLUMNAS (" . scalar(@c) . ") $f: " . substr($l, 0, 60) . "\n"; $mal++; next; }
    my $k = shift @c;
    if ($visto{$k}++) { next; }
    print "NO ESTÁ EN LA APP: $k\n" unless $enApp{$k};
    push @es, $k; $tr{$k} = \@c;
  }
}
my @falta = grep { !$visto{$_} } sort keys %enApp;
print "SIN TRADUCIR (" . scalar(@falta) . "): " . join(" | ", @falta) . "\n";
sub escribir { my ($f, @l) = @_; open my $o, '>:raw', $f or die; for (@l) { my $s = "$_\r\n"; utf8::encode($s); print $o $s; } close $o; }
escribir("$out/$city.txt", @es);
for my $i (0..$#langs) { escribir("$out/$langs[$i].$city.txt", map { ($_ + 1) . "|" . $tr{$es[$_]}[$i] } 0..$#es); }
print "textos: " . scalar(@es) . ($mal ? ", con $mal problemas" : "") . "\n";
