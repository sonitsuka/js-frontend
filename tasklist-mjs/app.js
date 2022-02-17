// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add task
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-conetent';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.append(li);
    
    // Clear input
    taskInput.value = '';
    e.preventDefault();
}