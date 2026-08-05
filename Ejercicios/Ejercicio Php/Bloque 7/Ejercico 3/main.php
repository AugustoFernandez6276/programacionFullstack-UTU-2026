<?php

$pares = 0;
for ($i = 1; $i <= 50; $i++) {
   if ($i % 2 == 0) {
    echo $i . "\n";
    $pares++;
}
}

echo "números pares es: " . $pares . "\n";


?>