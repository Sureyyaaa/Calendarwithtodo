const enterTodo = document.querySelector(".enter-todo") as HTMLInputElement;
const selectTime = document.querySelector(".select-time") as HTMLInputElement;
const save = document.querySelector(".save") as HTMLButtonElement;
const comlecetedList = document.querySelector(".compleceted-list") as HTMLUListElement;

let store: Array<object> = [];
save.addEventListener("click", saveTodo);
enterTodo.addEventListener("keypress", keyPressEnter);

function keyPressEnter (event) {
    event.keyCode === 13 ? (saveTodo(), enterTodo.click()) : null;
};

function saveTodo(): void {
    const id: number = Math.floor(Math.random() * 20);
    const text: number | string = enterTodo.value;
    const time: string = selectTime.value;
    const newtodo = {
        id,
        text,
        time,
    }
    store.push(newtodo);
    localStorage.setItem("store", JSON.stringify(store));
    let todos = JSON.parse(localStorage.getItem("store"));
    todos.forEach(todo => {
        todo.id === id ? renderList(todo) : null;
    });
};

const renderList = (todo) => {
    const { id, text } = todo;
    const singleTodo = document.createElement("li");
    const todoText = document.createElement("a");
    const deletebtn = document.createElement("span");
    singleTodo.className="single-todo";
    todoText.className="todo-text";
    deletebtn.className="delete";
    deletebtn.textContent = "x";
    todoText.textContent = text;
    singleTodo.id = id;

    todoText.href = "timer.html";
    singleTodo.appendChild(todoText);
    singleTodo.appendChild(deletebtn);
    comlecetedList.appendChild(singleTodo);
    deletebtn.addEventListener("click", deleteTodo);
    todoText.addEventListener("click", enterCurrentTodo);
};

const enterCurrentTodo = (e) =>{
    let currentTodo = e.target.parentElement;
    let currenttimerId;
    currenttimerId = parseInt(currentTodo.id);
    localStorage.setItem("currenttimerId", JSON.stringify(currenttimerId));
}
const deleteTodo = (e) =>{
    comlecetedList.innerHTML = "";
    store = store.filter((todo) => (parseInt(todo.id)) !== (parseInt(e.target.parentElement.id)));
    localStorage.clear();
    localStorage.setItem("store", JSON.stringify(store));
    let todos = JSON.parse(localStorage.getItem("store"));
    todos.forEach(todo => {
       renderList(todo); 
    });
}

window.onload = ()=>{
    let items = JSON.parse(localStorage.getItem("store"));
        items?.forEach(element => renderList(element));
}

//  localStorage.clear();
