use strict; use warnings; use utf8; binmode STDOUT, ':encoding(UTF-8)';
my $src = do { open my $h, '<:encoding(UTF-8)', $ARGV[0] or die; local $/; <$h> };
my (%t, %b);
while ($src =~ /^\s*\["(\w+)", "((?:[^"\\]|\\.)*)", "(?:[^"\\]|\\.)*", (F|"(?:[^"\\]|\\.)*")/mg) { $t{"$1/$2"}++; my $x = $3; $x =~ s/"//g; $b{$x}++; }
for my $k (sort keys %t) { print "TIPO $k $t{$k}\n" if $t{$k} < 4 }
my ($fb) = $src =~ /filterBarrios = \[([^\]]*)\]/;
for my $x ($fb =~ /"([^"]+)"/g) { print "BARRIO $x ", ($b{$x} // 0), "\n" if ($b{$x} // 0) < 4 }
print "total ", scalar(keys %t), " tipos\n";
