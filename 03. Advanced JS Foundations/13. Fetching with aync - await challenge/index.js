const apiURL = "https://apis.scrimba.com/bored/api/activity/"

async function getRandomActivity(apiURL) {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data.activity)
    } catch(error) {
        console.error(error)
    } 
}

getRandomActivity(apiURL)