// pseudocode
// initialize it as 0
// listen for clicks, when clicked increment count
// change the count-el in the html to reflect the new count

let countEl = document.getElementById('count-el') 
let saveEl = document.getElementById('save-el')

let count = 0
let input = 0

function increment() {
    
    count += 1
    countEl.innerText = count

}
// increment()

function save() {
    // input += count + " - "  OR
    // input = " " + count + " - " Or 
    input = count + " - "   // use with the .textContent or .innerText
    
    
    // saveEl.innerText = "Previous entry : " + input  OR
    // saveEl.innerText += input  Or
    saveEl.textContent += input
    // setting count to 0 to start another count from 0 when saved
    countEl.textContent = 0
    count = 0
}


// strings
let name = 43

let greeting = 'Hi, my name is '
let myGreeting = greeting + name
console.log(myGreeting)

