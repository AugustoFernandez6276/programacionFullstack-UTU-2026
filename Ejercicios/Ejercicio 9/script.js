// Ver el read.me para mirar los materiales que use para realizar los ejercicios
  
  alert("Hola mundo");
        
let nombre = prompt("Poner nombre");
if(nombre) {
    alert("Hola " + nombre);
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

          //&& sirve para combinar dos condciones es como basicamente un AND


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

       
for(var i =0 ; i<11; i++) {
            console.log(i);
              // Ver en consola
        }

        for(var i =0 ; i <= 20; i++) {
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

// == se usa para comparar el valor


let numero3 = prompt("Pone un numero hasta 0");
if(numero3 >= 0 && numero3 <= 0) {
      alert("Cero");
}   else if(numero3 >= 1 && numero3 <= 2) {
         alert("suma de numeros");
}

var menu = "Menu\n";
menu += "1. Hola,como estas?\n";
menu += "2. Miercoles, 20 de Mayo de 2026\n";
menu += "3. 5\n";

// // var menu guarda texto, += agrega texto al final, \n salta de linea. Ver video que use para ver como lo hice.

console.log(menu);

let numero4 = Math.floor(Math.random() * 11)
//  Math.random() genera un número decimal aleatorio entre 0 y 1. Math.floor redoneda entre 1 y 10.99, lo cual es el 11

console.log(numero4);



let usario = prompt("Ingresa numeros pares")
if (usario % 2 == 0) {
    alert("Es par");
} else {
    alert("es impar");
    let usuariopregunta = prompt("Quieres ingresar otro numero?")
    if (usuariopregunta == "si") {
         let usuario2 = prompt("Ingresa otro numero:")
        if (usuario2 % 2 == 0) {
            alert("Es par");
        } else {
            alert("es impar");
        }

    }
}

let nombres1=["Juan","Facundo","Nicolas","Santiago","Miguel"];
console.log(nombres1)



let nombres2=["Juan","Facundo","Nicolas","Santiago","Miguel"];
      for(var i = 0; i < nombres2.length; i++) {
    console.log(nombres2[i]);
    //Este ejecicio realiza el 17 y el 21 al mismo tiempo
}

const numeros5 =[8,2,35,4];

const mayor = Math.max(...numeros5);
 const menor = Math.min(...numeros5);

// Los ... Te devuelve los valores sueltos. El operador spread saca los elementos de su contenedor original. Esto lo dicuti contigo en clase profe, y lo entendi.

console.log("Mayor:", mayor);
console.log("Menor:", menor);

let nota2 = [1,2,3,4,5,6,7,8,9,10];
   

let suma = 0;
for (let i = 0; i < nota2.length; i++) {
    suma += nota2[i];
}

suma /= nota2.length;


console.log("Promedio:", suma);


const nombres3 = [];

while (true) {

    let value = prompt("Ingresa un nombre (o 'salir' para terminar):");

    if (value === "salir") {
        break;
    }

        nombres3.push(value);

        alert ("Nombre agregado: " + value);
        // === Es el operador de igualdad estricta. Compara valor y tipo al mismo tiempo.
}





let numerospares = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numerospares.length; i++) {
    if (numerospares[i] % 2 == 0) {
        console.log(numerospares[i]);
    }
}

const frutas = ["Sandia","Banana", "Pera","Naranja"];

console.log   (frutas.includes("Banana"));

let cosas = ["Pelota","Auto", "Paraguas", "Libro"];

cosas.pop();
console.log(cosas);

  

    let  animales = ["Cigarra", "Pez", "Arrendajo azul", "Gaviota"];

animales.push("Mapache");
console.log(animales);
    






