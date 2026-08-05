

<?php

$edad = 15;
$tieneEntrada = true;
$acompanadoPorAdulto = true;

if  
     (($edad >= 18 && $tieneEntrada) || $acompanadoPorAdulto) {
    
     echo "puede entrar";
} else {
    echo "no puede entrar";
}

?>