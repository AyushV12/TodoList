// selectors;
const todoInput=document.querySelector(".todo-Input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterToDo=document.querySelector(".filter-todo");



//event LIsteners

todoButton.addEventListener("click",addTodo);
filterToDo.addEventListener("click",filterTODO);
//Funcitons
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    console.log("hey_todo_added");
//Todo DIV
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");
//CREATE LIST ELEMENT
const newTodo=document.createElement("li");
newTodo.innerText=todoInput.value;

newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//CHECK MARK BUTTON
const completedButton=document.createElement("button");
completedButton.innerHTML='<i class="fas fa-check"></i>'
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//CHECK trach BUTTON
const trashButton=document.createElement("button");
trashButton.innerHTML='<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
// append to list
todoList.appendChild(todoDiv);
todoInput.value="";

trashButton.addEventListener("click",deleteTheDiv)
function deleteTheDiv(){
todoDiv.classList.toggle("fall");
//todoDiv.remove();
todoDiv.addEventListener("transitionend",removeFunction)
function removeFunction(){
    todoDiv.remove()
}

}
completedButton.addEventListener("click",toggleTheDiv)
function toggleTheDiv(){
    todoDiv.classList.toggle("completed");
}
}



function filterTODO(e){
console.log(e.target.value);
const todos=todoList.childNodes;
console.log(todos);
console.log(todos[0],todos);
for(i=1;i<todos.length;i++){
    todo=todos[i]
    
    switch(e.target.value){
        
        case "all":
            todo.style.display="flex";
            break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("completed")){
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;

    }
}
}