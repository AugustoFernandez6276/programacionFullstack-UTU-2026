<?php

$nota = 9;

if ($nota < 1 || $nota > 12) {
    echo "Error";
} elseif ($nota < 6) {
    echo "Insuficiente";
} elseif ($nota >= 6 && $nota <= 8) {
    echo "Aprobado";
} elseif ($nota >= 9 && $nota <= 10) {
    echo "Muy bueno";
} elseif ($nota >= 11 && $nota <= 12) {
    echo "Excelente";
}

?>