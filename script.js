const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasklist');
//adding task to the list
function addTask(){
    if(taskInput.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
}
//clicked on the task to mark it as completed or delete it
taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
//saving data to local storage
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();