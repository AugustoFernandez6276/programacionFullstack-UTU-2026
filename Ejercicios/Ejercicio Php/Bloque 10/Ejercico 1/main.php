<?php
function saludar($nombre) {
 return "Bienvenido al sistema " . $nombre;
}
$mensaje = saludar("Bienvenido al sistema");
echo $mensaje;
?>