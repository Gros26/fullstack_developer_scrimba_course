/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function meterToFeet(meter) {
    return (meter * 3.281).toFixed(3)
}

function feetToMeter(feet) {
    return (feet / 3.281).toFixed(3)
}

function literToGallon(liter) {
    return (liter * 0.264).toFixed(3)
}

function gallonrToLiter(gallon) {
    return (gallon / 0.264).toFixed(3)
}

function kilogramsToPounds(kilograms) {
    return (kilograms * 2.204).toFixed(3)
}

function poundsToKilograms(pounds) {
    return (pounds / 2.204).toFixed(3)
}

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const meterFeetEl = document.getElementById("meter-feet-el")
const litersGallonsEl = document.getElementById("liters-gallons-el")
const kilogramsPoundsEl = document.getElementById("kilograms-pounds-el")

inputBtn.addEventListener("click", function() {
    let unitToConvert = Number(inputEl.value)
    console.log(unitToConvert)
    meterFeetEl.textContent = `${unitToConvert} meters = ${meterToFeet(unitToConvert)} feet | ${unitToConvert} feet = ${feetToMeter(unitToConvert)} meters`
    litersGallonsEl.textContent = `${unitToConvert} liters = ${literToGallon(unitToConvert)} gallons | ${unitToConvert} gallons = ${gallonrToLiter(unitToConvert)} liters`
    kilogramsPoundsEl.textContent = `${unitToConvert} kilograms = ${kilogramsToPounds(unitToConvert)} pounds | ${unitToConvert} pounds = ${poundsToKilograms(unitToConvert)} kilograms`
})


