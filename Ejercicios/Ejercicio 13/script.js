const boton = document.getElementById('boton');
const elrisas = document.getElementById('bromita');
const categoria = document.getElementById('categoria');
const language = document.getElementById('language');
const type= document.getElementById('type');
const blacklist = document.getElementById('blacklist');



boton.addEventListener('click', async () => {
 
       const response = await fetch("https://v2.jokeapi.dev/joke/" + categoria.value + "?lang=" + language.value + "&type=" + type.value + "&blacklist=" + blacklist.value);
 
const data = await response.json();
elrisas.textContent = data.joke;


    

}

      );

