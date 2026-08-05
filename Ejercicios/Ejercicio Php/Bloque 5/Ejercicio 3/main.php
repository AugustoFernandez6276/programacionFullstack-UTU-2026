

<?php

$precio = 3000;
$presupuesto = 2000;
   $stock = 10;
$cantidad = 3;

$costoTotal = $precio * $cantidad;

if ($stock >= $cantidad && $presupuesto >= $costoTotal) {
    echo "Compra hecha";
} else {
    echo "compra no hecha";
}

?>