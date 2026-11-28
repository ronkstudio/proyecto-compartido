# Ubicación para Pekín (tarjeta #247): busca cada lugar en OpenStreetMap (Nominatim) por su nombre en chino, que va al final de la
# dirección ("Calle, Distrito · 中文名"), y lo da por bueno si cae en el distrito de la dirección. Si el nombre en chino no aparece,
# prueba con el nombre de la ficha. Uso: perl geopekin.pl data/pekin-lugares.js [ids,separados,por,coma] > geo.tsv  (después, coordsciudad.pl).
# Estado: ok (en su distrito), otro (otro distrito), fuera, nada. Para otra ciudad china: cambiar %dist y el recuadro de la búsqueda.
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP; use URI::Escape qw(uri_escape_utf8); use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; $| = 1;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 60);
sub getj { my $u = shift; my $r; for my $i (1..3) { $r = $http->get($u); last if $r->{success}; sleep 5 * $i; } sleep 1.1; return [] unless $r->{success}; return eval { decode_json($r->{content}) } || []; }
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
my %dist = (Dongcheng=>"东城区", Xicheng=>"西城区", Chaoyang=>"朝阳区", Haidian=>"海淀区", Fengtai=>"丰台区", Huairou=>"怀柔区", Yanqing=>"延庆区",
  Miyun=>"密云区", Changping=>"昌平区", Mentougou=>"门头沟区", Tongzhou=>"通州区", Shijingshan=>"石景山区", Hebei=>"河北省", Tianjin=>"天津市");
my $src = do { open my $h, "<:encoding(UTF-8)", $ARGV[0] or die; local $/; <$h> };
my $only = $ARGV[1] ? { map { $_ => 1 } split /,/, $ARGV[1] } : undef;
while ($src =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (F|"(?:[^"\\]|\\.)*"), "((?:[^"\\]|\\.)*)"/mg) {
  my ($cat, $sub, $name, $barrio, $addr) = ($1, $2, $3, $4, $5);
  my $id = slug($name); my $fuera = $barrio eq "F";
  next if $only && !$only->{$id};
  my ($lat, $zh) = split / · /, $addr, 2;
  unless ($zh) { print "$id\tnada\t\t\t$name | $addr\tsin nombre en chino\n"; next; }
  $zh =~ s/[（(].*?[)）]//g;
  my ($w) = $lat =~ /(\w+)$/; my $k = $dist{$w // ""};
  ($k) = grep { $lat =~ /\Q$_\E/ } keys %dist unless $k; $k = $dist{$k} if $k && $dist{$k};
  my ($best, $st) = (undef, "nada");
  for my $q ($zh, $name) {
    my $u = "https://nominatim.openstreetmap.org/search?format=json&limit=8&accept-language=zh&q=" . uri_escape_utf8($q)
      . ($fuera ? "&countrycodes=cn" : "&viewbox=116.10,40.10,116.65,39.75&bounded=1");
    my $r = getj($u);
    for my $c (@$r) { if ($k && $c->{display_name} =~ /\Q$k\E/) { $best = $c; $st = "ok"; last } }
    last if $best;
    if (!$best && @$r) { $best = $r->[0]; $st = $fuera ? "fuera" : "otro"; last; }
  }
  printf "%s\t%s\t%s\t%s\t%s\t%s\n", $id, $st, $best ? ($best->{lat}, $best->{lon}) : ("", ""), "$name | $addr", $best ? substr($best->{display_name}, 0, 90) : "";
}
