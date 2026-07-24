<?php

$stockdisponible = 10;
$cantidadsolicitada = 5;
$precio = 1000;
$presupuestodelcliente = 5000;


if ($stockdisponible >= $cantidadsolicitada) {
    echo "Hay stock disponible";
} else {
    echo "No hay stock disponible";
}

if ($presupuestodelcliente >= $precio) {
    echo "El cliente tiene presupuesto suficiente";
} else {
    echo "El cliente no tiene presupuesto suficiente";
}




?>