// log out itens in an array
let myCourses = ['css', 'ui', 'clean code']

function logItems(arr){
    for (let i=0; i < arr.length; i++)
    console.log(arr[i])
}
logItems(myCourses)

//save a localstorage
localStorage.setItem('myCredits', '10')
let myCredits = localStorage.getItem('myCredits')
console.log(myCredits)


// addEventlistener and object in array
let data = [
    {
        player: 'Jane',
        score: 52
    },
    {
        player: 'Mark',
        score: 41
    }
]
const janeBtn = document.getElementById('jane-btn')
janeBtn.addEventListener('click', function(){
    console.log(data[0].score)
})

// generate sentence
function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length -1
    for (let i = 0; i < arr.length; i++){
        if ( i === lastIndex){
            baseString += arr[i]
        }else{
            baseString += arr[i] + ','
        }
    }
    return baseString
}
const setence = generateSentence('highest mountains', ['Mount Everest', 'K3'])
console.log(setence)

// Render image
const imgs = [
    'images/'
]

const container = document.getElementById('container')
function renderImg (){
    let imgsDOM = ''
    for (let i = 0; i < imgs.length; i++){
       //container.innerHTML += `<img class = 'team-img src = ${imgs[i]}>`
       imgsDOM += `<img class = 'team-img alt ='personal' src = ${imgs[i]}>` // better parfomance 
    }
    container.innerHTML = imgsDOM
}