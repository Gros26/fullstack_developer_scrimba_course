function logAnswer(answer, points) {
    console.log(`The answer is ${answer} and it's ${points} points for getting it right`)
}

console.log("What is the capital of Peru?")

setTimeout(logAnswer, 3000, "Lima", 10)