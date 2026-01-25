function logAnswer(answer, points) {
    console.log(`The answer is ${answer} and it's ${points} points for getting it right`)
}

console.log("What is the capital of Peru?")

const questionTimer = setTimeout(logAnswer, 3000, "Lima", 10)

document.getElementById("stop").addEventListener("click", function() {
    clearTimeout(questionTimer) // Esto cancela el setTimeout, o sea que ya no se dispara despues de los 3 segundos si se aprieta el boton
    console.log("Canceled questionTimer")
})