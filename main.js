const todoForm = document.querySelector(".todo_form");
const todoInput = document.querySelector(".todoadds");
const todoButton = document.querySelector(".todo-button");
//const deleteTodo = document.querySelector();
//const listBody = document.querySelector();
const ul = document.querySelector("ul");
todoInput.focus(); //referencing HTML elements

//creating events for adding and deleting todos
todoButton.addEventListener("click", addTodo);
ul.addEventListener("click", deleteTodo); //event added to ul because no access to delete button

// creating blocks of codes for events //functions
function addTodo() {
    event.preventDefault() // prevent default behaviour of button
    const input = todoInput.value; //save input to varaible

    if (input === "") { alert('Please add a todo') } //make sure input has a value
    else {
        const listDiv = document.createElement("div")
        listDiv.classList = "lists";
        ul.appendChild(listDiv) //create, assign class and append
        const listLi = document.createElement("li")
        listLi.classList = "todo_item";
        ul.appendChild(listLi)
        listLi.innerHTML = input;
        todoInput.value = "";  //restore input back to empty
        const deleteBut = document.createElement("button")
        deleteBut.classList = "delete_todo";
        deleteBut.innerHTML = 'delete';
        listLi.appendChild(deleteBut);
    }
}


function deleteTodo(e) { //no access to delete button creation, classList used to reference delete button
    event.preventDefault();
    const item = e.target; //assign target button to variable 
    if (item.classList.contains("delete_todo"))// reference with classlist
    {
        const todo = item.parentElement; //access parent element to delete
        todo.remove()
    };
}

