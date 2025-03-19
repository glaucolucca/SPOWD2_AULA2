const todos = [];

const renderTodos = function () {
    const todoListUl = document.getElementById("todo-list");
    
    todoListUl.innerHTML = "";

    for(const todo of todos){
        const todoItemLi = document.createElement("li");
        todoItemLi.textContent = todo.text;
    
        if(!todo.done){
            const markTodoAsDoneButton = document.createElement("button");
            markTodoAsDoneButton.textContent = "Marcar como concluído";
        
            markTodoAsDoneButton.onclick = function(e) {
                markTodoAsDone(todo.id);
                renderTodos();
            }
        
            todoItemLi.appendChild(markTodoAsDoneButton);
        } else {
            todoItemLi.style.textDecoration = "line-through";
        }
        todoListUl.appendChild(todoItemLi);
    }   
}


document.getElementById("new-todo").addEventListener("keypress", function(e){    
    if(e.key === "Enter"){
        const newTodoInput = document.getElementById("new-todo");

        const todoInputValue = newTodoInput.value.trim();

        if(todoInputValue === "") return;
        
        addTodo(todoInputValue);
        
        newTodoInput.value = "";
        renderTodos();
    }
});

function markTodoAsDone(todoId){
    const todoToMark = todos.find((todo) => todo.id === todoId);
    todoToMark.done = true;
}

function addTodo(todoText){
    const lastId = (todos.length > 0? todos[todos.length - 1].id : 0);
    
    const newTodo = {
        id: lastId + 1,
        text: todoText
    };

    todos.push(newTodo);
}

renderTodos();
