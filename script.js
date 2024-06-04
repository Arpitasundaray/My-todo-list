const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click", addToDo);

function addToDo(event) {
    event.preventDefault();

    if (input.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    todolist.appendChild(todoDiv);

    // Clear the input value after adding the task
    input.value = '';
}

todolist.addEventListener("click", function(event) {
    const item = event.target;

    if (item.classList.contains("delete-btn") || item.closest(".delete-btn")) {
        const todo = item.closest(".todo-container");
        todo.remove();
    }

    if (item.classList.contains("complete-btn") || item.closest(".complete-btn")) {
        const todo = item.closest(".todo-container");
        todo.classList.toggle("completed");
    }
});
