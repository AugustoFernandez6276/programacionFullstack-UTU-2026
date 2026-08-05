<?php

$multiplosDe3 = 0;
for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0) {
        $multiplosDe3 += $i;
    }
}

echo "La suma de los múltiplos de 3 es: " . $multiplosDe3 . "\n";


?>