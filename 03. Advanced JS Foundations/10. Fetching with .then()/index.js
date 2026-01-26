fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    .then(response => response.json()) // cojo el JSON data y lo convierto a un objeto js para usarlo, es importante leer la documentacion para saber que me devuelve la API, porque no siempre devolvera un JSON
    .then(data => console.log(data)) //aqui cojo el resultado anterior que fue el objeto js y lo imprimo 


/* si lo hicera de esta otra manera retornaria una promesa
porque estas operaciones toman tiempo, aunque sea milisegundos. 
JavaScript no puede simplemente "pausarse" y esperar, porque bloquearía todo el navegador.
Y cuando termina, la Promesa se resuelve con los datos
*/
fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    .then(response => console.log(response.json())) 


// Usarlo para modificar el DOM

fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const imageElement = document.createElement("img")
        imageElement.src = data.message
        imageElement.alt = "random dog picture"
        document.getElementById("container").appendChild(imageElement)
    })

