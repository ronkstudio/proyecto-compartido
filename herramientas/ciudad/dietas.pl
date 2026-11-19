# Locales "solo vegano" o "solo sin gluten" según OpenStreetMap, en un recuadro. Uso: perl dietas.pl s,w,n,e
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP;
binmode STDOUT, ':encoding(UTF-8)';
my $bb = shift;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 200);
my $q = "[out:json][timeout:120];(nwr[\"diet:vegan\"=\"only\"][amenity]($bb);nwr[\"diet:gluten_free\"=\"only\"]($bb););out center tags;";
my $r; for (1..4) { $r = $http->post_form("https://overpass-api.de/api/interpreter", { data => $q }); last if $r->{success}; sleep 20; }
die "overpass $r->{status}\n" unless $r->{success};
for my $e (@{decode_json($r->{content})->{elements}}) {
  my $t = $e->{tags}; next unless $t->{name};
  my @d = grep { ($t->{"diet:$_"} // "") eq "only" } qw(vegan gluten_free);
  printf "%s\t%s\t%s\t%s %s, %s\t%s\t%.5f,%.5f\t%s\n", join("+", @d), $t->{name}, $t->{amenity} // $t->{shop} // "", $t->{"addr:street"} // "", $t->{"addr:housenumber"} // "", $t->{"addr:postcode"} // "", $t->{website} // $t->{"contact:website"} // "", $e->{lat} // $e->{center}{lat}, $e->{lon} // $e->{center}{lon}, $t->{check_date} // $t->{"survey:date"} // "";
}
