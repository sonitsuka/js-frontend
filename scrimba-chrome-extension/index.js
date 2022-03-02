let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById('tab-btn')

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: 'https://video.liverpoolfc.com/'}
]

tabBtn.addEventListener('click', function(){
    // Grab the URL of the current Tab
    //chrome.tabs.query({active: true, currentWindow: true}, function()){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // save the url instead of logging it out
        myLeads.push(tabs[0].url)
        localStorage.setItem('tabs', JSON.stringify(myLeads))
        render(myLeads)
        //console.log(tabs[0].url)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render()
})

function render(leads) {
    let listItems = ""
    // Log out the items in the myLEads array using a for Loop
    for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += '<li>' + myLeads[i] + ' </li>'
        //listItems += "<li><a target = '_blank' href=' + myLeads[i] + '>" + myLeads[i] + "</a></li>    
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        /* const li = document.createElement('li')
        li.textContent = myLeads[i]
        ulEl.append(li) */
    }
    ulEl.innerHTML = listItems
}


// Add the ability to choose the emoji as well!
const welcomeEl = document.getElementById('welcome-el')
//.                parameters = inside function
function greetUser(greeting, name, emoji){
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

//.        arguments = outside function 
greetUser('Happy Birthday', 'Virgil', '🎂')

// create function add() Parameters
function add(x,y){
    return x + y
}

// arguments 
console.log(add(2,10))