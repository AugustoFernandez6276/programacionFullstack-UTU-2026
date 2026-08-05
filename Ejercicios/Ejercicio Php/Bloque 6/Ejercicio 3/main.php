<?php

$total = 3000;

if ($total < 1000) {
    $descuento = 0;
}    

     elseif ($total >= 1000 && $total <= 4999) {
    $descuento = $total * 0.10;

    } else {
    $descuento = $total * 0.20;
}

$totalFinal = $total - $descuento;

echo "Total: " . $total . "\n";
echo "descuento: " . $descuento . "\n";
echo "total final: " . $totalFinal . "\n";

?>