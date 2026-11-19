# Junta las traducciones numeradas (tr/*.txt: "N|en||pt||fr||it||de||zh||ja" o "N|=") con los textos de nuevos.txt
# y deja trx/all.txt en el formato de armar-ciudad.pl ("es || en || pt || fr || it || de || zh || ja").
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my $d = shift;
open my $n, '<:encoding(UTF-8)', "$d/nuevos.txt" or die; my @es = map { s/\r?\n$//r } <$n>; close $n;
my %t;
opendir my $dh, "$d/tr" or die; my @fs = sort grep { /\.txt$/ } readdir $dh; closedir $dh;
for my $f (@fs) {
  open my $h, '<:encoding(UTF-8)', "$d/tr/$f" or die;
  while (<$h>) { s/\r?\n$//; next unless /^(\d+)\|(.*)$/; my ($i, $r) = ($1, $2);
    die "repetido $i en $f" if exists $t{$i};
    my @c = $r eq "=" ? (($es[$i-1]) x 7) : split / ?\|\| ?/, $r, -1;
    @c = map { s/^\s+|\s+$//gr } @c;
    die "columnas $i ($f): " . scalar(@c) if @c != 7;
    $t{$i} = [@c]; }
  close $h;
}
my @falta = grep { !$t{$_} } 1..@es; print "faltan: @falta\n";
open my $o, '>:encoding(UTF-8)', "$d/trx/all.txt" or die;
for my $i (1..@es) { next unless $t{$i}; print $o join(" || ", $es[$i-1], @{$t{$i}}), "\n"; }
close $o; print scalar(keys %t), " traducidos\n";
