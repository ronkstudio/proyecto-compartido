#!/usr/bin/perl
# Estaciones por línea cuando hay varias empresas de metro y trenes (Tokio, tarjeta #216). Lee el JSON de Overpass de:
#   [out:json];(rel[route=subway](S,O,N,E);rel[route=train]["name"~"山手線"](S,O,N,E););->.r;.r out body;node(r.r)->.n;.n out;
# (con curl: curl -A "guia-de-viaje/1.0" --data-urlencode "data@consulta.txt" https://overpass-api.de/api/interpreter; sin -A responde 406).
# Usa la letra de cada línea (ref) y el nombre en name:en. Uso: perl estaciones-tokio.pl est.json > est.txt
use strict; use warnings; use utf8; use JSON::PP;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)';
my $j = do { local $/; open my $h, '<:raw', $ARGV[0] or die; decode_json(<$h>) };
my %node; my @rels;
for my $e (@{$j->{elements}}) { if ($e->{type} eq "node") { $node{$e->{id}} = $e; } elsif ($e->{type} eq "relation") { push @rels, $e; } }
my %ref = (G => "Ginza", M => "Marunouchi", Mb => "Marunouchi", H => "Hibiya", T => "Tozai", C => "Chiyoda", Y => "Yurakucho", Z => "Hanzomon",
  N => "Namboku", F => "Fukutoshin", A => "Asakusa", I => "Mita", S => "Shinjuku", E => "Oedo", JY => "Yamanote (JR)");
my %out;
for my $rel (@rels) {
  my $t = $rel->{tags} || {}; my $r = $t->{ref} // "";
  my $l = $ref{$r};
  $l = "Yamanote (JR)" if !$l && ($t->{name} // "") =~ /山手線/;
  next unless $l;
  next if $l ne "Yamanote (JR)" && (($t->{route} // "") ne "subway" || ($t->{name} // "") !~ /東京メトロ|都営/);
  print STDERR "rel $rel->{id}: ", ($t->{name} // ""), " ($r) -> $l\n";
  for my $m (@{$rel->{members}}) {
    next unless $m->{type} eq "node" && ($m->{role} // "") =~ /^stop|^$/;
    my $nd = $node{$m->{ref}} or next; my $tg = $nd->{tags} || {};
    my $nm = $tg->{"name:en"} // $tg->{"name:ja-Latn"} // $tg->{"name:ja_rm"}; my %rm = ("南千住" => "Minami-senju", "池袋" => "Ikebukuro", "新高島平" => "Shin-takashimadaira", "木場" => "Kiba", "茅場町" => "Kayabacho"); $nm //= $rm{$tg->{name} // ""}; unless ($nm) { print STDERR "SIN ROMAJI $l: ", ($tg->{name} // "?"), "
"; next }
    $nm =~ s/\s*\(.*?\)\s*$//; $nm =~ s/ Station$//i; $nm =~ s/"/'/g;
    next unless $nm =~ /[A-Za-z]/;
    $out{$l}{$nm} //= [$nd->{lat}, $nd->{lon}];
  }
}
print "  stations: {\n";
my @ls = grep { $out{$_} } ("Ginza", "Marunouchi", "Hibiya", "Tozai", "Chiyoda", "Yurakucho", "Hanzomon", "Namboku", "Fukutoshin", "Asakusa", "Mita", "Shinjuku", "Oedo", "Yamanote (JR)");
for my $i (0..$#ls) { my $l = $ls[$i];
  print STDERR "$l: ", scalar(keys %{$out{$l}}), "\n";
  print "    \"$l\": [", join(", ", map { sprintf '["%s", %.5f, %.5f]', $_, @{$out{$l}{$_}} } sort keys %{$out{$l}}), "]", ($i < $#ls ? "," : ""), "\n"; }
print "  }\n";
