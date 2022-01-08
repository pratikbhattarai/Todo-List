
let todoList = [];
let inputField = document.getElementById('inputField');
let container = document.getElementById('container')

function init() {
    todoList = JSON.parse(localStorage.getItem('todoList', todoList));
    renderList();
}
init();

function addTodo(event) {

    event.preventDefault();
    todoList.push({
        data: inputField.value,
    });
    inputField.value = '',
        localStorage.setItem('todoList', JSON.stringify(todoList));
    renderList();
}

function renderList() {
    container.innerHTML = ''
    todoList.forEach((value, index) => {
        container.innerHTML +=
            `<li 
             onclick="removeTodo(${index})">${value.data}`
    })
}
function removeTodo(ind) {
    todoList = todoList.filter((value, index) => index != ind);
    localStorage.setItem('todoList', todoList)
    renderList();
}



