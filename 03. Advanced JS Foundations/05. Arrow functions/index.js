// const getSpendAlert = function(amount) {
//     return `Warning! You just spend $${amount}`
// }



//Si le pasa un solo parametro no hay necesidad de envolverlo en parentesis
const getSpendAlert = amount => {
    return `Warning! You just spend $${amount}`
}

//Cuando no recibe parametros si debe tener los parentesis
const getSpendAlert2 = ()=> {
    return `Warning! You just spend some money`
}

// Ademas si es una instruccion de una sola linea no hay necesidad de usar curly brackets ni de usar return
const getSpendAlert3 = amount => `Warning! You just spend $${amount}`

const getSpendAlert4 = (name, amount) => `Warning, ${name}! You just spend $${amount}`

const getSpendAlert5 = amount => amount < 50 ? "Warning" : "Continue"


//Buscando las ventajes de las arrow functions, encontre que las arrow functions no tienen su propio this
//estas heredan el this de el entorno en el que fue creado. Ejemplo:

//Sin arrow function

const user = {
    name: "Ana",
    greeting: function() {
        setTimeout(function() {
            console.log(`Hola soy ${this.name}`) // Tirara hola soy undefined, porque el this ahora es del contexto global
        }, 1000)
    }
}

user.greeting()

const userArrow = {
    name: "Ana",
    greeting: function() {
        setTimeout(() => {
            console.log("entor")
            console.log(`Hola soy ${this.name}`) // Ahora si funcionaria porque la arrow function no tiene su propio this, hereda el this del lugar donde fue creada (el método greeting), donde this sí apunta a user.
        }, 1000)
    }
}

userArrow.greeting()


// Pero no funcionaria si fuera algo como 

const userArrow2 = {
    name: "Ana",
    greeting: () => { // Aqui la cosa cambia porque las arrow function no encapsula nada
        setTimeout(() => {
            console.log("entor")
            console.log(`Hola soy ${this.name}`) 
        }, 1000)
    }
}

userArrow2.greeting()

// en cambio 

const user3 = {
    name: "Ana",
    greeting: function() { //function si encapsula el this y lo hace de este ambito
        setTimeout(() => {
            console.log("entor")
            console.log(`Hola soy ${this.name}`) // Ahora si funcionaria porque la arrow function no tiene su propio this, hereda el this del lugar donde fue creada (el método greeting), donde this sí apunta a user.
        }, 1000)
    }
}