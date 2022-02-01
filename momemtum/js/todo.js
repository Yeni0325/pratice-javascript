const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");   // = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li는 span을 자식으로 가지게됨!
    span.innerText = newTodo;
    todoList.appendChild(li);

}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";              // toDoInput.value에 빈 값을 넣었다고 해서 newTodo에 담긴 값이 빈 문자열이 담긴것이 아님!!
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
