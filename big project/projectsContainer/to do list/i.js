






const submitBtn = document.getElementById("submitBtn");
const removeBtn = document.getElementById("removeBtn");
const container = document.getElementById("tasks");
const task = document.querySelectorAll("#task")
const value = document.getElementById("taskInp").value;
// const newTask = document.createElement('div').textContent = value;

// turn 'localStorage.getItem('tasks')' into a const
const tasksString = localStorage.getItem('tasks'); 
// check if tasks contains strins, if so split them with each "," if not return as an empty array
let tasks = tasksString ? tasksString.split(',') : [];



// build task list html
function draw() {
    let tasksHtml = "";

    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) { 
            tasksHtml += `<div id="task">
                    <li class="task">${tasks[i]}</li>
                    <button class="removeBtn" onclick="remove(${i})">remove task</button>
                </div>`;
        }
    } else {
        tasksHtml   = "no tasks";
    }
    // output task list html to page
    container.innerHTML = tasksHtml;
}

//call out the draw function
draw();

function addTask() {
    // add task to tasks array
    const value = document.getElementById("taskInp").value;   
    // put the input value in the tasks array 
    tasks.push(value);
    // refresh the local storage
    localStorage.setItem('tasks', tasks)
    //call out the draw function
    draw()
}

function remove(index) {
    // remove the selcted task from the array of tasks
    tasks.splice(index, 1);
    // refresh the local storage
    localStorage.setItem('tasks', tasks)
    //call out the draw function 
    draw()
}
