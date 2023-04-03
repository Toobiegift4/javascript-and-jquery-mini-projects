
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById('message-el')

let sumEl = document.getElementById('sum-el')
// let sumEl = document.querySelector('#sum-el')

let cardEl = document.getElementById('card-el')

let player = {
     name:  'Per',
     chips:  145
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 13) + 1)
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }

}

function startGame() {
    isAlive = true
    let fCard = getRandomCard()
    let sCard = getRandomCard()
    cards = [fCard, sCard]
    sum = fCard + sCard
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Card : "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you've got blackjack"
        hasBlackjack = true
    } else {
        message = "You lose"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)

        renderGame()
    }



}


// console.log(hasBlackjack)
// console.log(isAlive)
// console.log(message)