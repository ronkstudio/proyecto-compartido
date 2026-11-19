# Busca fotos libres para los lugares que no tienen, sobre todo comida, noche y hoteles.
# Uso: perl fotos2.pl <ciudad.tsv> "<Nombre ciudad para buscar>" > salida.tsv
# Entrada (del navegador): id, nombre, cat, sub, dirección, lat, lon, tieneFoto(0/1)
# Tres caminos, en orden, y siempre exigiendo que el nombre del lugar coincida:
#  1. OpenStreetMap: el local (a menos de 120 m y con el mismo nombre) tiene wikimedia_commons, image o wikidata (P18).
#  2. Commons cerca: archivos de Commons sacados a menos de 150 m cuyo título nombra al lugar.
#  3. Commons categoría: una categoría con el nombre del lugar y la ciudad (o cerca, con coordenadas a menos de 300 m).
# Salida: id \t ruta (a/ab/Archivo) \t camino \t título del archivo \t distancia o nota
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP; use URI::Escape qw(uri_escape_utf8); use Digest::MD5 qw(md5_hex); use Encode; use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)';
my ($in, $ciudad) = @ARGV;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 200);
sub getj { my $u = shift; my $r; for my $i (1..6) { $r = $http->get($u); last if $r->{success}; sleep($r->{status} == 429 ? 90 : 6 * $i); } sleep 2; return undef unless $r->{success}; return eval { decode_json($r->{content}) }; }
sub postj { my ($u, $q) = @_; my $r; for my $i (1..4) { $r = $http->post_form($u, { data => $q }); last if $r->{success}; print STDERR "overpass $r->{status}\n"; sleep 20 * $i; } return undef unless $r->{success}; return eval { decode_json($r->{content}) }; }
sub dist { my ($a1,$o1,$a2,$o2) = @_; my $dx = ($o2-$o1)*cos($a1*3.14159/180)*111320; my $dy = ($a2-$a1)*110540; return sqrt($dx*$dx+$dy*$dy); }
my %gen = map { $_ => 1 } qw(restaurante restaurant ristorante bar cafe caffe cafeteria hotel hostal hostel trattoria osteria pizzeria taberna bodega cerveceria la el los las il lo le les de del di da dei della delle des du the das der die und y e et and of a en im am zum zur al alla club pub bistro brasserie gasthaus kneipe forno pasticceria gelateria enoteca vineria wine);
sub norm { my $s = NFD(shift // ""); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/ß/ss/g; $s =~ s/[^a-z0-9]+/ /g; $s =~ s/^\s+|\s+$//g; return $s; }
sub core { my $n = shift; $n =~ s/ · .*//; $n =~ s/\(.*?\)//g; my @t = grep { !$gen{$_} } split / /, norm($n); return join " ", @t; }
sub nombra { my ($core, $texto) = @_; return 0 if length($core) < 4; my $t = " " . norm($texto) . " "; return index($t, " $core ") >= 0 ? 1 : 0; }
sub ruta { my $f = shift; $f =~ s/^(File|Archivo|Datei|Fichier):\s*//i; $f =~ s/ /_/g; my $m = md5_hex(encode("UTF-8", $f)); return substr($m,0,1) . "/" . substr($m,0,2) . "/" . $f; }
sub esimg { return $_[0] =~ /\.(jpe?g|png|webp|tiff?)$/i; }

my @L;
open my $h, '<:encoding(UTF-8)', $in or die;
while (<$h>) { s/\r?\n$//; my @c = split /\t/; next unless @c >= 8; next if $c[7]; next if $c[5] eq ""; push @L, { id => $c[0], name => $c[1], cat => $c[2], sub => $c[3], addr => $c[4], lat => $c[5], lon => $c[6], core => core($c[1]), full => norm(($c[1] =~ s/ · .*//r) =~ s/\(.*?\)//gr) }; }
# Locales (comer, noche, dormir): la foto tiene que ser del local, no de la plaza, la calle o la iglesia que le dan el nombre.
sub esLocal { return $_[0]{cat} =~ /^(comer|noche|dormir)$/; }
sub tipook { my $t = shift; return (($t->{amenity} // "") =~ /^(restaurant|cafe|bar|pub|fast_food|ice_cream|nightclub|biergarten|food_court)$/) || (($t->{tourism} // "") =~ /^(hotel|hostel|guest_house|apartment|motel)$/) || (($t->{shop} // "") =~ /^(bakery|pastry|confectionery|deli|chocolate|coffee|tea|wine|cheese|butcher|seafood)$/) || (($t->{craft} // "") =~ /^(brewery|winery|distillery)$/) || exists $t->{cuisine}; }
# El núcleo del nombre es también un lugar (está en la dirección): solo vale si el título trae el nombre completo.
sub esLugar { my $p = shift; return nombra($p->{core}, $p->{addr} . " " . $p->{sub}); }
close $h;
print STDERR scalar(@L), " lugares sin foto con ubicación\n";
my ($s, $w, $n, $e) = (90, 180, -90, -180);
for (@L) { $s = $_->{lat} if $_->{lat} < $s; $n = $_->{lat} if $_->{lat} > $n; $w = $_->{lon} if $_->{lon} < $w; $e = $_->{lon} if $_->{lon} > $e; }
# Las excursiones lejanas agrandan demasiado el recuadro: se usa el de la ciudad (percentil 5-95) más un margen.
my @la = sort { $a <=> $b } map { $_->{lat} } @L; my @lo = sort { $a <=> $b } map { $_->{lon} } @L;
($s, $n, $w, $e) = ($la[int(@la*0.03)] - 0.02, $la[int(@la*0.97)] + 0.02, $lo[int(@lo*0.03)] - 0.03, $lo[int(@lo*0.97)] + 0.03);
my $bb = "$s,$w,$n,$e";
my $q = "[out:json][timeout:180];(nwr[name][wikimedia_commons][~\"^(amenity|tourism|shop|leisure|club|craft)\$\"~\".\"]($bb);nwr[name][image][~\"^(amenity|tourism|shop|leisure|club|craft)\$\"~\".\"]($bb);nwr[name][wikidata][~\"^(amenity|tourism|shop|leisure|club|craft)\$\"~\".\"]($bb););out center tags;";
my $o = postj("https://overpass-api.de/api/interpreter", $q) || { elements => [] };
my @osm = map { { name => $_->{tags}{name}, lat => $_->{lat} // $_->{center}{lat}, lon => $_->{lon} // $_->{center}{lon}, t => $_->{tags} } } grep { $_->{tags} } @{$o->{elements}};
print STDERR scalar(@osm), " locales de OpenStreetMap con foto o wikidata\n";

my %hecho;
# 1. OpenStreetMap
for my $p (@L) {
  my ($mejor, $md) = (undef, 121);
  for my $x (@osm) { next unless defined $x->{lat}; my $d = dist($p->{lat}, $p->{lon}, $x->{lat}, $x->{lon}); next if $d >= $md;
    my $cx = core($x->{name}); next unless length($p->{core}) >= 3 && ($cx eq $p->{core} || nombra($p->{core}, $x->{name}));
    next if esLocal($p) && !tipook($x->{t});
    ($mejor, $md) = ($x, $d); }
  next unless $mejor;
  my $t = $mejor->{t}; my $file;
  if (($t->{wikimedia_commons} // "") =~ /^File:(.+)/i) { $file = $1; }
  elsif (($t->{image} // "") =~ m{commons\.wikimedia\.org/wiki/(?:File|Special:FilePath)[:/](.+)}i) { $file = URI::Escape::uri_unescape($1); $file = decode("UTF-8", $file); }
  elsif (($t->{image} // "") =~ m{upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?./../([^/]+)}i) { $file = decode("UTF-8", URI::Escape::uri_unescape($1)); }
  elsif (($t->{wikimedia_commons} // "") =~ /^Category:(.+)/i) { my $c = getj("https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtype=file&cmlimit=20&cmtitle=" . uri_escape_utf8("Category:$1")); for (@{$c->{query}{categorymembers} || []}) { if (esimg($_->{title})) { ($file = $_->{title}) =~ s/^File://; last; } } }
  if (!$file && $t->{wikidata}) { my $wd = getj("https://www.wikidata.org/wiki/Special:EntityData/$t->{wikidata}.json"); my $c = $wd && $wd->{entities}{$t->{wikidata}}{claims}; $file = $c->{P18}[0]{mainsnak}{datavalue}{value} if $c && $c->{P18}; sleep 1; }
  next unless $file && esimg($file);
  $file =~ s/_/ /g;
  printf "%s\t%s\tosm\t%s\t%.0f m (%s)\n", $p->{id}, ruta($file), $file, $md, $mejor->{name}; $hecho{$p->{id}} = 1;
}
# 2. Commons cerca
for my $p (@L) {
  next if $hecho{$p->{id}} || length($p->{core}) < 4;
  my $g = getj("https://commons.wikimedia.org/w/api.php?action=query&format=json&list=geosearch&gsnamespace=6&gslimit=100&gsradius=150&gscoord=$p->{lat}|$p->{lon}");
  sleep 1;
  my $estricto = esLocal($p) && esLugar($p);
  my @r = sort { $a->{dist} <=> $b->{dist} } grep { esimg($_->{title}) && ($estricto ? nombra($p->{full}, $_->{title}) : nombra($p->{core}, $_->{title})) } @{$g->{query}{geosearch} || []};
  next unless @r;
  (my $f = $r[0]{title}) =~ s/^File://;
  printf "%s\t%s\tcerca\t%s\t%.0f m\n", $p->{id}, ruta($f), $f, $r[0]{dist}; $hecho{$p->{id}} = 1;
}
# 3. Commons categoría
for my $p (@L) {
  next if $hecho{$p->{id}} || length($p->{core}) < 5;
  my $nm = $p->{name}; $nm =~ s/ · .*//; $nm =~ s/\(.*?\)//g;
  my $sr = getj("https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=14&srlimit=8&srsearch=" . uri_escape_utf8("$nm $ciudad"));
  sleep 1;
  for my $r (@{$sr->{query}{search} || []}) {
    my $ct = $r->{title}; (my $cn = $ct) =~ s/^Category://;
    next unless (esLocal($p) && esLugar($p)) ? nombra($p->{full}, $cn) : nombra($p->{core}, $cn);
    next if $cn =~ /\b(street|strasse|straße|calle|carrer|via|rue|piazza|plaza|plaça|platz|place|station|estaci|metro|people|interior|logos?)\b/i && $nm !~ /\b(street|strasse|calle|carrer|via|rue|piazza|plaza|plaça|platz|place)\b/i;
    my $c = getj("https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=categorymembers&gcmtype=file&gcmlimit=30&prop=coordinates&gcmtitle=" . uri_escape_utf8($ct));
    sleep 1;
    my @f = grep { esimg($_->{title}) } values %{$c->{query}{pages} || {}};
    next unless @f;
    my ($sel, $nota);
    for (sort { $a->{title} cmp $b->{title} } @f) { my $co = $_->{coordinates} && $_->{coordinates}[0]; next unless $co; my $d = dist($p->{lat}, $p->{lon}, $co->{lat}, $co->{lon}); if ($d < 300) { $sel = $_; $nota = sprintf("%.0f m", $d); last; } }
    if (!$sel && norm($cn) =~ /\b\Q@{[norm($ciudad)]}\E\b/) { $sel = (sort { $a->{title} cmp $b->{title} } @f)[0]; $nota = "categoría con la ciudad"; }
    next unless $sel;
    (my $f = $sel->{title}) =~ s/^File://;
    printf "%s\t%s\tcateg\t%s\t%s [%s]\n", $p->{id}, ruta($f), $f, $nota, $cn; $hecho{$p->{id}} = 1; last;
  }
}
print STDERR scalar(keys %hecho), " fotos nuevas\n";
