function addTask() {
	var inputTask = document.getElementById("inputTask");
	if (inputTask.value.trim() != "") {
		var taskList = document.getElementById("taskList");
		if (inputTask.placeholder == "Enter Task" && taskList.childElementCount == 1) {
			var taskElem = taskList.firstElementChild;
			taskElem.firstElementChild.disabled = false;
			taskElem.lastElementChild.innerHTML = inputTask.value;
		} else {
			var taskElem = document.createElement("li");
			taskElem.innerHTML = "\n<input type=\"button\" class=\"done\" onclick=\"markDone(this.parentNode);\" value=\"&#x2713;\"/>"
						       + "\n<input type=\"button\" class=\"remove\" onclick=\"removeTask(this.parentNode);\" value=\"&#x2717;\" disabled/>"
						       + "\n<input type=\"button\" class=\"important\" onclick=\"toggleImportant(this.parentNode)\" value=\"!\"/>"
						       + "\n<span>"
						       + inputTask.value
						       + "</span>";
			taskList.appendChild(taskElem);
		}
		inputTask.value = "";
		inputTask.placeholder = "Enter Next Task";
	}
}
function markDone(taskElem) {
	taskElem.lastElementChild.style = "text-decoration: line-through;";
	var inputButton = taskElem.firstElementChild;
	inputButton.disabled = true;
	inputButton = inputButton.nextElementSibling;
	inputButton.disabled = false;
	inputButton = inputButton.nextElementSibling;
	inputButton.disabled = true;
}
function removeTask(taskElem) {
	if (taskElem.parentElement.childElementCount == 1)
		document.getElementById("inputTask").placeholder = "Enter Task";
	taskElem.remove();
}
function toggleAuthorName() {
	var display = document.getElementById("authorName").style.display;
	document.getElementById("authorName").style.display = display == "block" ? "none" : "block";
}
function toggleImportant(taskElem) {
	var backgroundColor = taskElem.style.backgroundColor,
		color = taskElem.style.color;
	taskElem.style.backgroundColor = backgroundColor == "orangered" ? "" : "orangered";
	taskElem.style.color = color == "wheat" ? "midnightblue" : "wheat";
}
