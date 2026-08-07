<?php
function esMayorDeEdad($edad) {
 return $edad >= 18;
}
if (esMayorDeEdad(18)) {
 echo "Acceso permitido";
}

else {
 echo "Acceso denegado";
}
?>
