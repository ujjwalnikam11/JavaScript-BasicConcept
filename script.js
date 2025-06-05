const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Submit event
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.title = "Mark as Complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
}
