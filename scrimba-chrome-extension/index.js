let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads() {
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
function greetUser(greeting, name, emoji){
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}
greetUser('Happy Birthday', 'Virgil', '🎂')

// create function add()
function add(x,y){
    return x + y
}

console.log(add(2,10))