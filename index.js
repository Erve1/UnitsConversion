/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


//CONVERSION
const lenghtRatio = 3.281
const volumeRatio = 0.264
const massRatio = 2.204

//INPUTS ELEMENTS
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

let userValue = ""

//OUTPUT ELEMENTS
const lenghtContainer = document.getElementById("lenght-container")
const volumeContainer = document.getElementById("volume-container")
const massContainer = document.getElementById("mass-container")

//GENERAL FUNCTION
function render(unit1, unit1Sg, ratio, unit2, unit2Sg) {
    if(userValue <= 1 && userValue >= -1) {
    return `${userValue} ${unit1Sg} = ${(userValue * ratio).toFixed(3)} ${unit2Sg} | ${userValue} ${unit2Sg} = ${(userValue / ratio).toFixed(3)} ${unit1Sg}`
    } else {
    return `${userValue} ${unit1} = ${(userValue * ratio).toFixed(3)} ${unit2} | ${userValue} ${unit2} = ${(userValue / ratio).toFixed(3)} ${unit1}`  
    }
}

//RUN CONVERTOR
inputBtn.addEventListener("click", function () {
    userValue = inputEl.value
    let lenght = render("meters", "meter", lenghtRatio, "feets", "feet")
    let volume = render("liters", "liter", volumeRatio, "gallons", "gallon")
    let mass = render("kilograms", "kilogram", massRatio, "pounds", "pound")
    
    lenghtContainer.innerHTML = lenght
    volumeContainer.innerHTML = volume
    massContainer.innerHTML = mass
})