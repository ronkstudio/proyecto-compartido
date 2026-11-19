use URI::Escape; # Arma una hoja HTML para revisar fotos a ojo: perl hoja.pl salida.html f2-x.tsv [f1-x.tsv ...]
use strict; use warnings; use utf8;
my ($out, @in) = @ARGV;
open my $o, '>:encoding(UTF-8)', $out or die;
print $o '<!doctype html><meta charset="utf-8"><style>body{font:11px sans-serif;margin:4px}div{display:inline-block;width:180px;margin:2px;vertical-align:top}img{width:180px;height:120px;object-fit:cover;background:#ddd}b{display:block}</style>';
my $n = 0;
for my $f (@in) {
  open my $h, '<:encoding(UTF-8)', $f or next;
  while (<$h>) { chomp; my ($id, $p, $m, $t, $nota) = split /\t/; next unless $p; $n++;
    my $u = join("/", map { URI::Escape::uri_escape_utf8($_) } split m{/}, $p); my @b = split m{/}, $p;
    my $fn = URI::Escape::uri_escape_utf8($b[-1]);
    my $src = "https://upload.wikimedia.org/wikipedia/commons/thumb/$u/250px-$fn";
    $t =~ s/</&lt;/g; $nota //= ""; $nota =~ s/</&lt;/g;
    print $o "<div><img loading=lazy src=\"$src\" onerror=\"this.style.outline='3px solid red'\"><b>$n. $id</b>$m · " . substr($t, 0, 60) . "<br>" . substr($nota, 0, 60) . "</div>\n";
  }
}
close $o; print "$n fotos\n";
