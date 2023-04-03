// let dayOfMonth = 13
// let weekday = "Friday"
// if (dayOfMonth === 13 && weekday ==="Friday") {
//     console.log("ohhh noooo")
// }

let hands = ["rock", "paper","scissors"]
function getHand(){
    randomNumber = Math.floor(Math.random()*3)
    console.log(hands[randomNumber])
}
getHand()