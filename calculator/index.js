// let myPoints = 3
// function remove1Point() {
//     myPoints -= 1
// }

// function add3Points() {
//     myPoints += 3
// }
// add3Points()
// add3Points()
// add3Points()

// remove1Point()
// remove1Point()

// console.log(myPoints)


let num1 = 8
let num2 = 2

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2
sumEl = document.getElementById('sum-el')


function add() {
    
    let result = num1 + num2
    sumEl.textContent = "sum: " + result
}

function subtract() {
    
    let result = num1 - num2
    sumEl.textContent = "sum: " + result



}

function divide() {
    
    
    let result = num1 / num2
    sumEl.textContent = "sum: " + result



}

function multiply() {
    
    
    let result = num1 * num2
    sumEl.textContent = "sum: " + result



}



