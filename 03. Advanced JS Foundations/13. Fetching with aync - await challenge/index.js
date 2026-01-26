const apiURL = "https://apis.scrimba.com/bored/api/activi/"

async function getRandomActivity(apiURL) {
    try {
        const response = await fetch(apiURL)
        if (!response.ok) { // response.ok se asegura de que HTTP status sea true, o sea entre 200 y 299
            throw new Error('error: ' + response.status)
        }
        
        const data = await response.json()
        console.log(data.activity)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("The operation completed.")
    }
}

getRandomActivity(apiURL)