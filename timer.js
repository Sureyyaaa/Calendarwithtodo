const timerSection = document.querySelector(".timer-section");

window.onload = function () {
    const todos = JSON.parse(localStorage.getItem("store"));
    const currentTodoId = JSON.parse(localStorage.getItem("currenttimerId"));
    todos.forEach( todo => {
        if(todo.id === currentTodoId) {
            const currentTodoText = document.createElement("div");
            const currentTodoTime = document.createElement("div");
            currentTodoText.className = "current-todo-text";
            currentTodoTime.className = "current-todo-time";

            currentTodoText.textContent = todo.text;

            const yenile = setInterval(function () {
                const now = new Date().getTime();
                const currentTime = new Date(todo.time).getTime();
                const diferenceTime = currentTime - now;
                const day = Math.floor(diferenceTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diferenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diferenceTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diferenceTime % (1000 * 60)) / 1000);
                currentTodoTime.textContent = day + " : " + hours + " : " + minutes + " : " + seconds;
            }, 1000);
            timerSection.appendChild(currentTodoText);
            timerSection.appendChild(currentTodoTime);
        }
    });
};
