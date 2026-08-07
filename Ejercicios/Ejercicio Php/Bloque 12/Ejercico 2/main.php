<?php
$nombres = ["Miguel", "Nicolas", "Facundo", "Santiago","Juan"];
echo $nombres[0];
echo $nombres[1];
echo $nombres[2];
echo $nombres[3];
echo $nombres[4];

$nombres = ["Miguel", "Nicolas", "Facundo", "Santiago","Juan"];
for ($i = 0; $i < count($nombres); $i++) {
echo $nombres[$i]; }
foreach ($nombres as $nombre) {
 echo $nombre;
}



?>
