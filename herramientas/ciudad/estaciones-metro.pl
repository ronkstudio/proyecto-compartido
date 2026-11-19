#!/usr/bin/perl
# Estaciones del metro por línea, desde las relaciones route=subway de OpenStreetMap. Uso: perl estaciones-metro.pl > est.txt (cambiar el recuadro y los nombres de línea de %linea).
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP;
binmode STDOUT, ':encoding(UTF-8)';
my $q = '[out:json][timeout:90];area["name"="Lisboa"]["admin_level"="7"]->.a;rel[route=subway][network~"Metro",i](38.69,-9.24,38.80,-9.08);out body;node(r:"stop");out;node(r:"");out;';
$q = '[out:json][timeout:90];rel[route=subway](38.69,-9.24,38.80,-9.08)->.r;.r out body;node(r.r)->.n;.n out;';
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 150);
my $r;
for my $i (1..4) { for my $srv ("https://overpass-api.de/api/interpreter", "https://overpass.private.coffee/api/interpreter", "https://overpass.kumi.systems/api/interpreter") {
  $r = $http->post_form($srv, { data => $q }); last if $r->{success}; print STDERR "$srv $r->{status}\n"; sleep 5; } last if $r->{success}; sleep 30; }
die "sin respuesta\n" unless $r->{success};
my $j = decode_json($r->{content});
my %node; my @rels;
for my $e (@{$j->{elements}}) { if ($e->{type} eq "node") { $node{$e->{id}} = $e; } elsif ($e->{type} eq "relation") { push @rels, $e; } }
my %linea = (azul => "Azul", blue => "Azul", amarela => "Amarela", yellow => "Amarela", verde => "Verde", green => "Verde", vermelha => "Vermelha", red => "Vermelha");
my %out;
for my $rel (@rels) {
  my $t = $rel->{tags} || {}; my $n = lc(($t->{name} // "") . " " . ($t->{ref} // "") . " " . ($t->{colour} // ""));
  my ($l) = map { $linea{$_} } grep { $n =~ /\b$_\b/ } keys %linea; next unless $l;
  print STDERR "rel $rel->{id}: $t->{name} -> $l\n";
  for my $m (@{$rel->{members}}) {
    next unless $m->{type} eq "node" && ($m->{role} // "") =~ /stop|^$/;
    my $nd = $node{$m->{ref}} or next; my $nm = $nd->{tags}{name} or next;
    $out{$l}{$nm} //= [$nd->{lat}, $nd->{lon}];
  }
}
print "  stations: {\n";
my @ls = grep { $out{$_} } qw(Azul Amarela Verde Vermelha);
for my $i (0..$#ls) { my $l = $ls[$i];
  print "    \"$l\": [", join(", ", map { sprintf '["%s", %.5f, %.5f]', $_, @{$out{$l}{$_}} } sort keys %{$out{$l}}), "]", ($i < $#ls ? "," : ""), "\n"; }
print "  }\n";
