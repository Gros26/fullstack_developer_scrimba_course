import { GROQ_API_KEY } from "./config.js"

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    }, 
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

async function testGroqAPI() {
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: messages
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data.choices[0].message.content)

    } catch(error) {
        console.error('Error: ', error.message)
    }
}

testGroqAPI()