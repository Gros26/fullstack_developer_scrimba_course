const exerciseTimeMins = 20
const exerciseTimeMins2 = 60

const message = exerciseTimeMins < 30 ? "Doing good!" : "You need to try harder!"

const message2 =  exerciseTimeMins2 < 30 ? "Doing good!" : exerciseTimeMins2 < 60 ? "You need to try harder!" : "Super bad"

console.log(message)
console.log(message2)

//////////////////

const playerGuess = 3 
const correctAnswer = 6

const message3 = playerGuess === correctAnswer ? 'Correct' : 'Wrong'

const message4 = playerGuess < correctAnswer ? 'Too low' : playerGuess > correctAnswer ? 'Too high' : 'Exactly right!'

console.log(message3)
console.log(message4)