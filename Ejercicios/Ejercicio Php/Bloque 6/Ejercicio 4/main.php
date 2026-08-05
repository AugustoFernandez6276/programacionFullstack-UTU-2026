
<?php

$producto = "Computadora";
$precio = 120000;
$stock = 10;
$cantidad = 10;

if ($stock >= $cantidad) {

    $subtotal = $precio * $cantidad;

    if ($cantidad >= 10) {
       
         $descuento = $subtotal * 0.15;
    
         } else {
        
    
    $descuento = 0;
    }

    $total = $subtotal - $descuento;

    
    echo "producto: " . $producto . "\n";
    echo "subtotal: " . $subtotal . "\n";
    
      echo "descuento: " . $descuento . "\n";
    echo "total: " . $total . "\n";

} else {
    echo "stock insuficiente";
}

?>