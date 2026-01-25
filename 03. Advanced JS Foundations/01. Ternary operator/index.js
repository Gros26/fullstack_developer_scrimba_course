const exerciseTimeMins = 20
const exerciseTimeMins2 = 60

const message = exerciseTimeMins < 30 ? "Doing good!" : "You need to try harder!"

const message2 =  exerciseTimeMins2 < 30 ? "Doing good!" : exerciseTimeMins2 < 60 ? "You need to try harder!" : "Super bad"

console.log(message)
console.log(message2)