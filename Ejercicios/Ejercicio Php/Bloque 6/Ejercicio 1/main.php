<?php

$edad = 10;
$precio = 200;

if ($edad < 12) {
    $precioFinal = $precio * 0.50;
} else {
    
      $precioFinal = $precio;
}

echo $precioFinal;

?>