let count = 0
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')

//console.log(countEl)

function increment(){
    //console.log('the button was clicked')
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


/* DOM
let username = "per"
let message = "you have tree new notifications"
let messageToUser = message + "," + username + "!"
console.log(message + "," + username)

let surname = "per"
let greeting = "Hi, my name is "
let myGreeting = greeting + surname
console.log(myGreeting)

let points = 4
let bounasPoints = "10"
let totalPoints = points + bounasPoints

console.log(4+5)
console.log('100' + 5)
console.log(34 + "100")


let welcomeEl = document.getElementById('welcome-el')
let name = "Klopp"
let greeting = "Welcome back"

welcomeEl.innerText = greeting + name
welcomeEl.innerText = welcomeEl.innerText + "👋"
*/

/* Modul 2-1
let lap1 = 32
let lap2 = 34
let lap3 = 50

function logLapTime(){
    let totalTime = lap1 +lap2 + lap3 
    console.log(totalTime)
}

let lapsCompleted = 0
function incrementLap(){
    lapsCompleted = lapsCompleted+1;
}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
*/