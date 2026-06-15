const ImagenDeGati = document.getElementById("ImagenDeGati");
const TraerGato = document.getElementById("TraerGato");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const CantidadDeLikes = document.getElementById("CantidadDeLikes");
const CantidadDeDislikes = document.getElementById("CantidadDeDislikes");
const resultado = document.getElementById("resultado");
let likes = 0;
let dislikes = 0;


document.getElementById("TraerGato").addEventListener("click", async () => {

  try {

    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "live_G8X7n8B5uPcdGUYH5GzrLBoq5krQ4scjEYmR6wNo1EZALOsjMvVQ176NfspiQLj7"
      }
    });
    const data = await response.json();

    console.log("GET →", data);
    document.getElementById("ImagenDeGati").innerHTML = `<img src="${data[0].url}" width="300">`;

  } catch (error) {
    console.error("Error:", error);
  }
});

document.getElementById("like").addEventListener("click", async () => {
     if (!ImagenDeGati) return; // Si no hay imagen cargada, no va a suceder nadita
  try {

    const response = await fetch("https://api.thecatapi.com/v1/votes ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "live_G8X7n8B5uPcdGUYH5GzrLBoq5krQ4scjEYmR6wNo1EZALOsjMvVQ176NfspiQLj7"
      },
    
      body: JSON.stringify({
      "image_id": "ImagenDeGati",

 "value": 1
      })
    });

    const data = await response.json();

    console.log("POST →", data);
   
    likes++;
    document.getElementById("CantidadDeLikes").textContent = `Likes: ${likes}`;  // actualiza el contador de likes
    alert("Voto registrado");
    traerGato();

  } catch (error) {
    console.error("Error:", error);
  }

  
});

document.getElementById("dislike").addEventListener("click", async () => {
      if (!ImagenDeGati) return; // Si no hay imagen cargada, no va a suceder nadita
  try {

    const response = await fetch("https://api.thecatapi.com/v1/votes ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "live_G8X7n8B5uPcdGUYH5GzrLBoq5krQ4scjEYmR6wNo1EZALOsjMvVQ176NfspiQLj7"
      },
    
      body: JSON.stringify({
      "image_id": "id_de_la_imagen",

 "value": -1
      })
    });

    const data = await response.json();

    console.log("POST →", data);

   dislikes++;
    document.getElementById("CantidadDeDislikes").textContent = `Dislikes: ${dislikes}`; // actualiza el contador de dislikes
    alert("Voto registrado");
    traerGato();

  } catch (error) {
    console.error("Error:", error);
  }

  
});

