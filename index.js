function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.className = "list-group-item";
    newTask.innerText = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-right";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        newTask.remove();
    }

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
}