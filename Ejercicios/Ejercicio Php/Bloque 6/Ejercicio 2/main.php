
<?php

$precioUnitario = 50;

       $cantidad = 6;

$subtotal = $precioUnitario * $cantidad;

if ($cantidad >= 5) {
    $descuento = $subtotal * 0.10;
} else {
    $descuento = 0;
}

$total = $subtotal - $descuento;

echo "Subtotal: " . $subtotal . "\n";
 
echo "descuento: " . $descuento . "\n";

   echo "Total: " . $total . "\n";

?>