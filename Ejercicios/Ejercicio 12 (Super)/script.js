let name = document.querySelector("#name");
let description = document.querySelector("#description");
let kind = document.querySelector("#kind");
let state = document.querySelector("#state");
let img = document.querySelector("#img");
let errorTask = document.querySelector('#error-task');
let errorImg = document.querySelector('#error-img');
let submitBtn = document.querySelector('.btn-gradient');
let modooscuro = document.querySelector ('#modooscuro');
let valoracion = document.querySelector('#valoracion');




submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const grupos = document.querySelectorAll('.control-formulario');
grupos.forEach(function(grupo){
    const campo = grupo.querySelector('.input, textarea, select');
    const error = grupo.querySelector('.error-message');

    if(campo && error){
        error.classList.toggle('visible', campo.value.trim() === "");
    }
});
let errorValoracion = valoracion.closest('.control-formulario')
                           .querySelector('.error-message');
let valor = Number(valoracion.value);
if (valoracion.value.trim() !== "" && (valor < 1 || valor > 5)) {
    errorValoracion.textContent = "No se aceptan valores mayores a 5 y menores a 1";
    errorValoracion.classList.add('visible');
}
else {
     errorValoracion.textContent = "Solo se aceptan numeros";
    errorValoracion.classList.add('visible');
}
    

    if(name.value.trim() !== '' && description.value.trim() !== '' && kind.value.trim() !== '' && state.value.trim() !== '' && img.value.trim() !== '') {
       
        let div = document.createElement('div');
        div.classList.add('task');


        const pTask = document.createElement('p');
        const btnComplete = document.createElement('button');
        btnComplete.textContent = "Cambiar estado";
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Eliminar"

        pTask.textContent = `Nombre: ${name.value}`;
        const pDesc = document.createElement('p');
        pDesc.textContent = `Descripción: ${description.value}`;
        const pKind = document.createElement('p');
        pKind.textContent = `Tipo: ${kind.value}`;
        const pState = document.createElement('p');
        pState.textContent = `Estado: ${state.value}`;
       div.dataset.estado = state.value;
       const pValoracion = document.createElement('p');
        pValoracion.textContent = `Calificación: ${valor}`;
        // Se crean párrafos con los datos del formulario y se guardan el estado en dataset
      

        div.appendChild(pTask);
        div.appendChild(pDesc);
        div.appendChild(pKind);
        div.appendChild(pState);
        div.appendChild(pValoracion);
        div.appendChild(btnComplete);
        div.appendChild(btnDelete);


        btnComplete.addEventListener('click', function(){
             
                 const estados = ['Pendiente', 'En progreso', 'Terminado'];
    let indice = estados.indexOf(div.dataset.estado);    if(indice === -1) indice = 0;
    
         let nuevoEstado = estados[(indice + 1) % estados.length];
       
            div.dataset.estado = nuevoEstado;
    pState.textContent = `Estado: ${nuevoEstado}`;
    // Al clickear busca el estado actual en el array y pasa al siguiente al no lo encuentra empieza desde 0
    
            
            
            
        })

        btnDelete.addEventListener('click', function(){
            div.remove();
            updateCounts();
        })

   document.querySelector('#contendedorDeTarjetas').appendChild(div);

        name.value = "";
        description.value = "";
        kind.value = "";
        state.value = "";
        img.value = "";
        updateCounts();
    }
});

function updateCounts() {
    const total = document.querySelectorAll('.task').length;
    document.querySelector('#total-count').textContent = total;
}


let oscuro = false;

modooscuro.addEventListener('click', function() {
    oscuro = !oscuro;

    const content = document.querySelector('.content');
    const title = document.querySelector('.title');

    if (oscuro) {
        content.style.backgroundColor = "black";
        content.style.color = "white";
        title.style.color = "white";
    } else {
        content.style.backgroundColor = "#f0f0f0";
        content.style.color = "black";
        title.style.color = "black";
    }
});



    

