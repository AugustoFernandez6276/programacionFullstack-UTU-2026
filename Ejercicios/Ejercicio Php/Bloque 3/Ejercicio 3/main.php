<?php

$numero = 10;
$texto = "10";

$comparar = $numero == $texto;
$comparar2 = $numero === $texto;

echo "comparcion valor: " . $comparar;
echo "comparacion valor y tipo: " . $comparar2;

// == compara solo el valor tras convertir los tipos, mientras que el operador
// === compara tanto el valor como el tipo de dato, por lo que en este caso

?>


