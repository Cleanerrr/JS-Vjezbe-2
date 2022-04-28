let newTodo = document.createElement('div');

function addtodo() {
    let todoInput = document.querySelector('#todo-input').value;
    let todoButton = document.querySelector('#todo-button');
    let todos = document.querySelector('#todos');

    newTodo.className = 'todo-item';

    if (todoInput !== "") {
        todos.appendChild(newTodo);
        newTodo.innerHTML += `<div class="single-todo col-8 mt-3 m-auto">
                                <div class="border d-flex justify-content-between align-items-center p-2">
                                    <p>${todoInput}</p>
                                    <button onclick="removeTodo(this)">X</button>
                                    <button onclick="done(this)">Done</button>
                                </div>
                            </div>`

    } else {
        alert('Unesite ToDo!');
    }
}

function removeTodo(el) {
    let singleItem = el.closest('.single-todo');
    singleItem.remove();
}

function done(el) {
    let singleItem = el.closest('.single-todo');
    singleItem.classList.toggle('done-todo');
}