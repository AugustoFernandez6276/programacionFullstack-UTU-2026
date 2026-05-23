



function textocambiaa(){
    
     let titulo = document.getElementById("titulo");
    
           titulo.textContent = "Hello everybody my name is Markiplier";
           // textContent reemplaza todo el contenido de texto del elemento.
}
    

function textocambia(){
    let titulo2 = document.getElementById("titulo2");
       titulo2.innerHTML = "And i am a fish";
    
    // innerHTML reemplaza todo el contenido HTML del elemento.
}

   

   function cambiarimagen(){
         let brochacho = document.getElementById("Brochacho");
    brochacho.src = "https://i.ibb.co/qvc2C6t/Lego.jpg";

}

  function agregar() {
         
                  const input = document.getElementById("inputTexto");
             const texto = input.value();

  }




function agregarclase(){
    let agregarclase = document.getElementById("agregarclase");
    agregarclase.classList.add("agregarclase");

}

                function borrarclase(){
    let borrarclase = document.getElementById("borrarclase");
    borrarclase.classList.remove("borrarclase");
}

    function botonmodooscuro() {
    document.body.classList.toggle("modooscuro");
}

function agregarelementos() {

let lista = document.getElementById("lista");


 let li = document.createElement("li");
  
   li.textContent = "Nuevas Listas";
      lista.appendChild(li);

}
// createElement Crea el elemento en y appendChild lo inserta en el DOM


function enviarFormulario() {
    document.body.classList.toggle("modooscuro");
    //Cuando lo das el boton de enviar se pondra el modo osucro por unos segundos mientras se reincia la pagina y pone la alerta

 let nombre = document.getElementById("nombre").value;
      let colorfavorito = document.getElementById("colorfavorito").value;
            let mensaje = document.getElementById("mensaje").value;
            
           if (nombre ==  "" || colorfavorito == "" || mensaje == "") {
    alert("Error");
    return;

// El || significa "or" — con que uno solo esté vacío, ya muestra el error.
// return hace que la fucnion no se ejecute si es que falta poner texto y salte el mensaje de "error".

}


alert("Nombre: " + nombre + "\nColor Favorito: " + colorfavorito + "\nMensaje: " + mensaje);
// \n es un salto de linea


}
