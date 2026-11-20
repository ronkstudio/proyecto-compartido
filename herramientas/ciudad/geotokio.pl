# Ubicación para ciudades cuyas direcciones el mapa no entiende (Tokio, tarjeta #216): busca cada lugar por su nombre en OpenStreetMap
# (Nominatim también busca en name:en) y lo da por bueno si cae en el distrito (ku) de su dirección ("Barrio, Distrito").
# Uso: perl geotokio.pl data/tokio-lugares.js > geo.tsv  (después, coordsciudad.pl). Estado: ok, otroku (otro distrito), fuera, nada.
# Para otra ciudad: cambiar %ku (distrito en romaji => como figura en OpenStreetMap) y el recuadro de la búsqueda.
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP; use URI::Escape qw(uri_escape_utf8); use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; $| = 1;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 60);
sub getj { my $u = shift; my $r; for my $i (1..3) { $r = $http->get($u); last if $r->{success}; sleep 5 * $i; } sleep 1.1; return [] unless $r->{success}; return eval { decode_json($r->{content}) } || []; }
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
my %ku = (Taito=>"台東区",Sumida=>"墨田区",Koto=>"江東区",Chiyoda=>"千代田区",Chuo=>"中央区",Minato=>"港区",Shinjuku=>"新宿区",Shibuya=>"渋谷区",Bunkyo=>"文京区",Toshima=>"豊島区",Meguro=>"目黒区",Setagaya=>"世田谷区",Shinagawa=>"品川区");
my $src = do { open my $h, "<:encoding(UTF-8)", $ARGV[0] or die; local $/; <$h> };
my $only = $ARGV[1] ? { map { $_ => 1 } split /,/, $ARGV[1] } : undef;
while ($src =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (F|"(?:[^"\\]|\\.)*"), "((?:[^"\\]|\\.)*)"/mg) {
  my ($cat, $sub, $name, $barrio, $addr) = ($1, $2, $3, $4, $5);
  my $id = slug($name); my $fuera = $barrio eq "F";
  next if $only && !$only->{$id};
  my ($w) = $addr =~ /,\s*([A-Za-z]+)$/; $w //= $addr; my $k = $ku{$w};
  my $q = $name; $q =~ s/\\"/"/g;
  my $u = "https://nominatim.openstreetmap.org/search?format=json&limit=6&accept-language=ja&q=" . uri_escape_utf8($fuera ? "$q, Japan" : $q) . ($fuera ? "&countrycodes=jp" : "&viewbox=139.55,35.82,139.92,35.52&bounded=1");
  my $r = getj($u); my ($best, $st) = (undef, "nada");
  for my $c (@$r) { if ($k && $c->{display_name} =~ /\Q$k\E/) { $best = $c; $st = "ok"; last } }
  if (!$best && @$r) { $best = $r->[0]; $st = $fuera ? "fuera" : "otroku"; }
  printf "%s\t%s\t%s\t%s\t%s\t%s\n", $id, $st, $best ? ($best->{lat}, $best->{lon}) : ("", ""), "$name | $addr", $best ? substr($best->{display_name}, 0, 90) : "";
}
