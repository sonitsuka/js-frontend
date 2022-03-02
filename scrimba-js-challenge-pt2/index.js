// if elese statements
let age = 15

if(age < 6){
    console.log('free')
}else if (age < 18){
    console.log('child discount')
}else if (age < 27){
    console.log('student discount')
}else if (age < 67){
    console.log('full price')
}else {
    console.log('senior citizen discount')
}


// Array

let largeCountries =['China', 'India', 'USA', 'Indonesia', 'Monaco'] 

for (let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}

// Push 1 element in Array, pop: remove it
largeCountries.pop()
largeCountries.push('Pakstan')
largeCountries.shift()
largeCountries.unshift('China')
console.log(largeCountries)

// logic operator 
let dayOfMonth = 13
let weekday = 'Friday'

if (dayOfMonth === 13 && weekday === 'Friday'){
    console.log('😱')
}

// Random Game
let hands = ['rock', 'paper', 'scissor']
function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

/* Create a function that puts the apples onto the appleShelf 
and the oranges onto the orangeShelf. Use a for loop,
a conditional statement, and the textContent property.*/

function sortFruit(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎"){
            //appleShelf.push("🍎")
            appleShelf.textContent += "🍎"
        }else if (fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        }
    }
}
sortFruit()


