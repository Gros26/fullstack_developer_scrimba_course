function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if(success) {
            resolve("Operation successful!")
        }
        else {
            reject("Operation failed")
        }
    })
}

/*  Lo que hace Promise.all() es ejecutar varias promises en paralelo y continuar solo cuanto todas terminen
    - Si todas ejecutan resolve devuelve un array con los resultados en el mismo orden
    - Pero si aunque sea una ejecuta reject todo falla inmediatamente y no devuelve las demas aunque esas hayan terminado bien
    Son todas o nada
*/

try {
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()
    const result = await Promise.all([promise1, promise2, promise3]) 
    console.log(result)
} catch(error) {
    console.log(error)
}