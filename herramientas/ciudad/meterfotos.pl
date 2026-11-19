use strict; use warnings;
my ($f, $ins) = @ARGV;
my $s = do { open my $h, '<:raw', $ins or die; local $/; <$h> };
my $t = do { open my $h, '<:raw', $f or die; local $/; <$h> };
my %ya; while ($t =~ /^    "([^"]+)": "[0-9a-f]\//mg) { $ya{$1} = 1; }
my @l = grep { /^    "([^"]+)"/ && !$ya{$1}++ } split /\n/, $s;
my $add = join("\n", @l) . "\n";
$t =~ s/(\n  photos: \{\r?\n)/$1$add/ or die "sin photos";
open my $o, '>:raw', $f or die; print $o $t; close $o;
print scalar(@l), " fotos agregadas a $f\n";
