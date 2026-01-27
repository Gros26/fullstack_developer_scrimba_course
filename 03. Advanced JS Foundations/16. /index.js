/*
Este codigo que usa callbacks puede ser reescrito como promesas y seran mas legibles
*/

function uploadFile(call) {
    console.log('Step 1: Uploading file...')
        setTimeout(() => {
            call()
        }, 1000)
}

function processFile(call) {
    console.log('Step 2: Processing file...')
        setTimeout(() => {
            call()
        }, 1000)
}

function notifyUser(call) {
    console.log('Step 3: Notifying user...')
        setTimeout(() => {
            call()
        }, 1000)
}

// Este llamado es un callback hell, un codigo dificil de escalar y para manejar errores necesitariamos otro parametro
//Este codigo se leeria hacia la derecha
uploadFile(() =>
    processFile(() =>
        notifyUser(() => console.log('All steps completed'))
    )
)

// En cambio si usamos promesas

function uploadFilee() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function processFilee() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function notifyUserr() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

// Podemos hacer un llamado que parezca sincrono, cuando en realidad es algo asincrono
// Se lee hacia abajo, mucho mejor. Ademas con mejor manejo de errores

try {
    await uploadFilee()
    await processFilee()
    await notifyUserr()
    console.log('All steps completed')
} catch(error) {
    console.error(error)
}


