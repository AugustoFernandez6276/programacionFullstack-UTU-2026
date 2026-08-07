<?php
$numeros = [1, 2, 3, 4, 5];
$sumaManual = 0;
for ($i = 0; $i < count($numeros); $i++) {
    $sumaManual += $numeros[$i];
}

echo $sumaManual;
$sumaArraySum = array_sum($numeros);
echo $sumaArraySum;
?>