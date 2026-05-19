
  
  alert("Hola mundo");
        
let nombre = prompt("Poner nombre");
if(nombre) {
    alert("Hola" + nombre);
    // Para que muestre "Hola Juan" tienes que poner Juan en el prompt
}
   

  let DiezSumadoUno = prompt("Poner numero para sumar");
  if(DiezSumadoUno) {
    alert("11");
    // Para que muestre "11" tienes que poner DiezSumadoUno
}

let edad = prompt("Poner edad");
if(edad >= 18) {
    alert("Es mayor");
}   else if(edad < 18) {
    alert("Es menor");
     // Me base en el video que mando de Javascript, que el tipo lo habia hecho con altura lo cambie por edad
}

let numero1 = prompt("Poner numero que sea par o impar");
if(numero1 >= 2) {
    alert("Es par");
}   else if(numero1 < 2) {
    alert("Es impar");
     // Solo sirve con el numero 1 y 2
}

let numero2 = prompt("Poner numero que sea mayoor o menor");
if(numero2 >= 1 && numero2 <= 2) {
      alert("Menor");
}   else if(numero2 >= 3 && numero2 <= 3) {
         alert("Mayor");


}


    let nota = prompt("Poner nota");
if(nota >= 8 && nota <= 10) {
      alert("Muy bien");
}   else if(nota >= 1 && nota <= 4) {
         alert("Insuficiente");
}    else {
       alert("Aceptable");
    //&& sirve para combinar dos condciones es como basicamente un AND
}

       
for(var i =0 ; i<10; i++) {
            console.log(i);
              // Ver en consola
        }

        for(var i =0 ; i<10; i++) {
             if (i % 2 == 0) {
            console.log(i);
              // Ver en consola
             }
            }

            let contraseña = prompt("Poner contraseña");
if(contraseña == 1234) {
    alert("correcta");
}   else {
    alert("Incorrecta");
}

