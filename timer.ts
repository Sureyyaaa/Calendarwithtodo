
const  timer = document.querySelector(".timer");
window.onload = function () {
    let items = JSON.parse(localStorage.getItem("store"));
    let currenttimerId = JSON.parse(localStorage.getItem("currenttimerId"));
    items.forEach(element => {
        if (element.id === currenttimerId) {
            console.log(element)

            const currentTodo = document.createElement("div");
            const currentTodoTime = document.createElement("div");

            currentTodo.textContent = element.text;
            let yenile = setInterval(() => {
                console.log(5)
                let now = new Date().getTime();
                let selecttime = new Date(element.time).getTime();
                var diferencetime = selecttime - now;
                var day = Math.floor(diferencetime / (1000 * 60 * 60 * 24));
                var hours = Math.floor((diferencetime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((diferencetime % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((diferencetime % (1000 * 60)) / 1000);

                currentTodoTime.textContent = day + " : " +hours + " : "+minutes+" : "+ seconds;
            },1000)
            timer.appendChild(currentTodo);
            timer.appendChild(currentTodoTime)
        }
    });
}