const url = "https://jsonplaceholder.typicode.com/posts"

async function getData(url) {
    try {
        const response = await fetch(url)
        console.log(response.status)
        if (!response.ok) {
            throw new Error('Error: '+ response.status)
        }

        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.error(err)
    } finally {
        console.log("Process finished.")
    }
}

getData(url)