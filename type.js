var enterTodo = document.querySelector(".enter-todo");
var selectTime = document.querySelector(".select-time");
var save = document.querySelector(".save");
var comlecetedList = document.querySelector(".compleceted-list");
var store = [];
save.addEventListener("click", saveTodo);
enterTodo.addEventListener("keypress", keyPressEnter);
function keyPressEnter(event) {
    event.keyCode === 13 ? (saveTodo(), enterTodo.click()) : null;
}
;
function saveTodo() {
    var id = Math.floor(Math.random() * 20);
    var text = enterTodo.value;
    var time = selectTime.value;
    var newtodo = {
        id: id,
        text: text,
        time: time
    };
    store.push(newtodo);
    localStorage.setItem("store", JSON.stringify(store));
    var todos = JSON.parse(localStorage.getItem("store"));
    todos.forEach(function (todo) {
        todo.id === id ? renderList(todo) : null;
    });
}
;
var renderList = function (todo) {
    var id = todo.id, text = todo.text;
    var singleTodo = document.createElement("li");
    var todoText = document.createElement("a");
    var deletebtn = document.createElement("span");
    singleTodo.className = "single-todo";
    todoText.className = "todo-text";
    deletebtn.className = "delete";
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
var enterCurrentTodo = function (e) {
    var currentTodo = e.target.parentElement;
    var currenttimerId;
    currenttimerId = parseInt(currentTodo.id);
    localStorage.setItem("currenttimerId", JSON.stringify(currenttimerId));
};
var deleteTodo = function (e) {
    comlecetedList.innerHTML = "";
    store = store.filter(function (todo) { return (parseInt(todo.id)) !== (parseInt(e.target.parentElement.id)); });
    localStorage.clear();
    localStorage.setItem("store", JSON.stringify(store));
    var todos = JSON.parse(localStorage.getItem("store"));
    todos.forEach(function (todo) {
        renderList(todo);
    });
};
window.onload = function () {
    var items = JSON.parse(localStorage.getItem("store"));
    items === null || items === void 0 ? void 0 : items.forEach(function (element) { return renderList(element); });
};
//  localStorage.clear();
