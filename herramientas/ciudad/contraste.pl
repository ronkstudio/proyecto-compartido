#!/usr/bin/perl
# Mide el contraste de los colores de cada ciudad (css/temas.css, tarjeta #207), en claro y en oscuro.
# Uso: perl contraste.pl <carpeta app> [id de una ciudad]
# Mínimos (WCAG): 4.5 para texto común (texto, texto gris, enlaces, botones, barra de arriba, portada);
# 3 para el dibujo del logo (sun-ink sobre sun). Si algo no llega, lo marca con <<.
use strict; use warnings; use utf8;
binmode STDOUT, ':encoding(UTF-8)';
my ($app, $solo) = @ARGV; die "Uso: perl contraste.pl <carpeta app> [ciudad]\n" unless $app;
sub leer { my $f = shift; open my $h, '<:encoding(UTF-8)', $f or die "no encuentro $f\n"; local $/; my $s = <$h>; close $h; $s }
sub vars { my %o; $o{$1} = $2 while $_[0] =~ /--([\w-]+):\s*([^;]+);/g; return %o; }
my $base = leer("$app/css/styles.css"); my $temas = leer("$app/css/temas.css");
my ($rl) = $base =~ /:root \{(.*?)\n\}/s;
my ($rd) = $base =~ /prefers-color-scheme: dark\) \{\s*:root \{(.*?)\}/s;
my %L0 = vars($rl); my %D0 = (%L0, vars($rd));
sub rgb { my $h = shift; $h =~ s/^#//; $h = join "", map { $_ x 2 } split //, $h if length $h == 3; return map { hex(substr($h, $_ * 2, 2)) / 255 } 0..2; }
sub lum { my @c = map { $_ <= .03928 ? $_ / 12.92 : (($_ + .055) / 1.055) ** 2.4 } rgb(shift); return .2126 * $c[0] + .7152 * $c[1] + .0722 * $c[2]; }
sub cr { my ($x, $y) = (lum($_[0]), lum($_[1])); ($x, $y) = ($y, $x) if $y > $x; return sprintf "%.2f", ($x + .05) / ($y + .05); }
my $malas = 0; my $n = 0;
while ($temas =~ /:root\[data-ciudad="([\w-]+)"\] \{(.*?)\n\}\n\@media \(prefers-color-scheme: dark\) \{\s*:root\[data-ciudad="[\w-]+"\] \{(.*?)\n  \}/sg) {
  my ($id, $cl, $os) = ($1, $2, $3); next if $solo && $id ne $solo; $n++;
  my %L = (%L0, vars($cl)); my %D = (%D0, vars($cl), vars($os));
  for my $m (['claro', \%L], ['oscuro', \%D]) {
    my ($modo, $T) = @$m;
    my @stops = ($T->{'hero-bg'} // '') =~ /(#[0-9a-fA-F]{6})/g;
    my %r = (texto => cr($T->{ink}, $T->{bg}), gris => cr($T->{'ink-3'}, $T->{surface}), enlace => cr($T->{accent}, $T->{bg}),
             boton => cr($T->{'accent-ink'}, $T->{accent}), barra => cr('#ffffff', $T->{brand}), logo => cr($T->{'sun-ink'}, $T->{sun}));
    $r{portada} = (sort { $a <=> $b } map { cr('#ffffff', $_) } @stops)[0] if @stops;
    my @mal = grep { $r{$_} < ($_ eq 'logo' ? 3 : 4.5) } sort keys %r; $malas += @mal;
    printf "%-10s %-6s %s%s\n", $id, $modo, join("  ", map { "$_ $r{$_}" } qw(texto gris enlace boton barra logo portada)), (@mal ? "  << " . join(",", @mal) : "");
  }
}
print $n ? ($malas ? "\n$malas valores no llegan al mínimo.\n" : "\nTodo llega al mínimo.\n") : "No encontré ciudades en css/temas.css.\n";
exit($malas ? 1 : 0);
