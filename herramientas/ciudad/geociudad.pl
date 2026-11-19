# Ubica y verifica los lugares de un archivo data/<ciudad>-lugares.js con OpenStreetMap (Nominatim).
# Uso: perl geociudad.pl data/<ciudad>-lugares.js "<Ciudad>" "<País>" oeste,norte,este,sur > geo.tsv  (después, coordsciudad.pl)
# Para cada lugar: 1) busca la dirección (calle y número); 2) busca el nombre dentro de la ciudad.
# Estado: ok (nombre a menos de 150 m de la dirección), nombre (solo el nombre, sin número en la dirección),
#         dir (solo la dirección: el nombre no figura), lejos (nombre y dirección no coinciden), nada.
use strict; use warnings; use utf8; use HTTP::Tiny; use JSON::PP; use URI::Escape qw(uri_escape_utf8); use Unicode::Normalize;
binmode STDOUT, ':encoding(UTF-8)'; binmode STDERR, ':encoding(UTF-8)'; $| = 1;
my ($file, $ciudad, $pais, $vb) = @ARGV;
my $http = HTTP::Tiny->new(agent => "guia-de-viaje/1.0", timeout => 60);
sub getj { my $u = shift; my $r; for my $i (1..3) { $r = $http->get($u); last if $r->{success}; sleep 5 * $i; } sleep 1.1; return [] unless $r->{success}; return eval { decode_json($r->{content}) } || []; }
sub slug { my $s = NFD(shift); $s =~ s/\p{Mn}//g; $s = lc $s; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-|-$//g; return $s; }
sub dist { my ($a1,$o1,$a2,$o2) = @_; my $dx = ($o2-$o1)*cos($a1*3.14159/180)*111320; my $dy = ($a2-$a1)*110540; return sqrt($dx*$dx+$dy*$dy); }
my $src = do { open my $h, "<:encoding(UTF-8)", $file or die; local $/; <$h> };
while ($src =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "((?:[^"\\]|\\.)*)", (F|"(?:[^"\\]|\\.)*"), "((?:[^"\\]|\\.)*)"/mg) {
  my ($cat, $sub, $name, $barrio, $addr) = ($1, $2, $3, $4, $5);
  my $id = slug($name); my $fuera = $barrio eq "F";
  my $q = $name; $q =~ s/\s*\(.*?\)//g;
  my ($alat, $alon);
  if ($addr =~ /\d/ && !$fuera) {
    my $r = getj("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" . uri_escape_utf8("$addr, $ciudad, $pais"));
    ($alat, $alon) = ($r->[0]{lat}, $r->[0]{lon}) if @$r;
  }
  my $nq = $fuera ? "$q, $pais" : "$q, $ciudad";
  my $u = "https://nominatim.openstreetmap.org/search?format=json&limit=5&q=" . uri_escape_utf8($nq) . ($fuera ? "" : "&viewbox=$vb&bounded=1");
  my $r = getj($u);
  my ($best, $bd);
  for my $c (@$r) { my $d = defined $alat ? dist($alat, $alon, $c->{lat}, $c->{lon}) : 0; if (!defined $bd || $d < $bd) { ($best, $bd) = ($c, $d); } }
  my ($st, $lat, $lon, $nota);
  if ($best && defined $alat) { if ($bd < 150) { ($st, $lat, $lon) = ("ok", $best->{lat}, $best->{lon}); } else { ($st, $lat, $lon) = ("lejos", $alat, $alon); } $nota = sprintf("%.0f m · %s", $bd, $best->{display_name}); }
  elsif ($best) { ($st, $lat, $lon, $nota) = ("nombre", $best->{lat}, $best->{lon}, $best->{display_name}); }
  elsif (defined $alat) { ($st, $lat, $lon, $nota) = ("dir", $alat, $alon, ""); }
  else { ($st, $lat, $lon, $nota) = ("nada", "", "", ""); }
  printf "%s\t%s\t%s\t%s\t%s\t%s\t%s\n", $id, $st, $lat // "", $lon // "", $cat, "$name | $addr", substr($nota // "", 0, 140);
}
