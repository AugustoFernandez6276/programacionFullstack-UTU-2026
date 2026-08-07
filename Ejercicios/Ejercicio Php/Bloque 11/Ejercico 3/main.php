<?php
function Descuento($precio, $porcentajeDescuento) {
    return $precio - ($precio * $porcentajeDescuento / 100);
}

$precioFinal = Descuento(1000, 10);
echo $precioFinal;
?>