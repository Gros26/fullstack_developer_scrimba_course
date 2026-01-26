// async / await proveen la facilidad de escribir codigo asincronico de forma que parezca sincrono

// La palabra reservada async define que una funcion devolvera una promesa, entonces si la funcion retorna un numero esto lo envuelve en una promesa

const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true"

async function weatherNY(apiURL) {
    console.log('A')
    try {
        const response = await fetch(apiURL) // await es como bloquear el codigo y hacer que esta funcion no continue hasta que no se solucione esta promesa, pero por fuera de la funcion el flujo del codigo continua normal
        
        if(!response.ok) {
            throw new Error('error ' + response.status)
        }

        const data = await response.json() // el .json() devuelve una promesa por eso usamos el await
        console.log('Temperature: ', data.current_weather.temperature)
        console.log('B')
    } catch(error) {
        console.error(error)
    } finally {
        console.log("Finished operation")
    }
}

weatherNY(apiURL)
console.log('C') // cuando se mira el flujo primero imprime A(que esta dentro de la funcion pero no se come el await), luego C, y ahi si continua con las promesas


