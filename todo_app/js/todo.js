//gets tasks from storage
function get_todos() {
    //creates an array to hold tasks
    var todos = new Array;
    //pulls tasks saved in local storage
    var todos_str = localStorage.getItem('todo');

    //if input is not null, turn the tasks from storage into a JSON object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

//adds new tasks from browser input to the get_todos function array
function add() {
    //assigns input task to a variable
    var task = document.getElementById('task').value;
    //assigns array of existing tasks to a variable
    var todos = get_todos();

    //adds input task to the array
    todos.push(task);

    //converts input task to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    //clears the input field
    document.getElementById('task').value = "";
    show();

    return false;
}

//displays tasks on the screen
function show() {
    //assigns array of tasks
    var todos = get_todos();
    //sets up each task as an unordered list
    var html = '<ul>';

    //displays each task to the list in the order it was input
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    //creates array of x buttons and adds listeners to run remove function
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

//removes a task from the list when the x button is clicked
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();

    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

//run add function when add button is clicked
document.getElementById('add').addEventListener('click', add);

//always display the tasks
show();