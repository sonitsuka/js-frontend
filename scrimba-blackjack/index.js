let player = {
    name:"Klopp",
    chips:145
    /*sayHallo: function(){
        console.log("Hi!!")
    }*/
}

let cards = [] // ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

// Render the players name and chips in plyerEl
playerEl.textContent = player.name + ": €" + player.chips

function getRandomCard(){
    // 1-13
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // if 1 -> return 11
    // if 11-13 -> return 10 
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " //+ cards[0] + " " + cards[1]
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    // render out all the cards we have 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        //console.log(cards)
        renderGame()
    }

}