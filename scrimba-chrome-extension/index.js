let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    // Log out the items in the myLEads array using a for Loop
    for (let i = 0; i < myLeads.length; i++){
    // ulEl.innerHTML += '<li>' + myLeads[i] + ' </li>'
        //listItems += "<li><a target = '_blank' href=' + myLeads[i] + '>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target = '_blank' href=' + ${myLeads[i]} + '> + 
                ${myLeads[i]} + </a>
            </li>
        `


    /* const li = document.createElement('li')
    li.textContent = myLeads[i]
    ulEl.append(li) */
    }
    ulEl.innerHTML = listItems
}


