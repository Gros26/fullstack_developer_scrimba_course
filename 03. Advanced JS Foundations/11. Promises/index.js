// una promesa representa un valor que no se tiene todavia

const apiUrl = "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"

function myFunction() {
    fetch(apiUrl)
        .then(response => {
            console.log('B')
        })
}

// En este flujo se puede ver A, C , B. La promesa toma su tiempo por lo que es lo ultimo en imprimirse
console.log('A')
myFunction()
console.log('C')

// Una promesa tiene 3 posibles estados: pending, fulfilled or rejected
// Creemos una promesa, esta recibe un argumento que es una funcion llamada The executor y esa funcion tiene como parametros a resolve y reject 

const testPromise = new Promise((resolve, reject) => {
    const result = 5 + 5
    if(result === 10) {
        resolve('Fulfilled 🥳')
    }
    else {
        reject('Rejected ‼️')
    }
})

// Ahora al llamar a la promesa usamos el .then() para manejar el caso donde se ejecuta resolve
// o usamos el .catch() para el caso donde se ejecuta reject

testPromise
    .then((message) => console.log(message))
    .catch((message) => console.log(message))

// Entonces como ya se vio en el modulo anterio de fetching with .then()
// Asi seria una consulta usando fetch() , .then() y .catch()

const apiUrl2 = "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true"
let isLoad = true

fetch(apiUrl2)
    .then(response =>{
        if(!response.ok) {
            throw new Error('error '+ response.status)
        }
        return response.json()
    })
    .then(data => {
        console.log('Temperature ', data.current_weather.temperature)
    })
    .catch(error => {
        console.error('error in catch ', error)
    })
    .finally(() => {
        isLoad = false
        console.log(isLoad)
    })