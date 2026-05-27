function enviarFormulario(event) {
      event.preventDefault();


 let agregar = document.getElementById("agregar").value;
    
           if (agregar ==  "") {
    alert("Error");
    return;

    
}


alert("Agregar: " + agregar);

let lista = document.getElementById("lista");
       
         let li = document.createElement("li");
  
     li.textContent = agregar;
  
     lista.appendChild(li)


}