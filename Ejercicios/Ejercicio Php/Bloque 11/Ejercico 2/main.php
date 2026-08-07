<?php
function esPar($numero) {
 return $numero % 2 == 0;
}
if (esPar(2)) {
 echo "El número es par";
}

else {
 echo "El número es impar";
}
?>