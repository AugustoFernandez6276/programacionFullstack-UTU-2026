<?php
function Promedio($nota1, $nota2, $nota3) {
    return ($nota1 + $nota2 + $nota3) / 3;
}

function Estudiante($promedio) {
    if ($promedio >= 5) {
        return "Aprobado";
    } else {
        return "Desaprobado";
    }
}

$promedio = Promedio(2, 8, 5);
echo "Promedio: " . $promedio . "\n";
echo "Estado: " . Estudiante($promedio);
?>