const url = "https://jsonplaceholder.typicode.com/posts"

async function getData(url) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json' // Tells the server the body is JSON
            }),
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'When I was kidnapped in Scotland...' ,
                id: 1,
            })
        })
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