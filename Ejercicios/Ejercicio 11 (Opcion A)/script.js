function enviarFormulario(event) {
      event.preventDefault();


 let agregar = document.getElementById("agregar").value;
     
 let error = document.getElementById("error");

    if (agregar === "") {
        error.classList.add("ver");
        return;
    }

    error.classList.remove("ver");

    
    let lista = document.getElementById("lista");
       let li = document.createElement("li");
        li.textContent = agregar;
     lista.appendChild(li);
}

function accion(event, boton) {
    
      let li = boton.parentElement;

    if (boton.textContent === "Completar") {
        
         li.classList.toggle("completada");

    } else if (boton.textContent === "Eliminar") {
       
           li.remove();
    }
}

