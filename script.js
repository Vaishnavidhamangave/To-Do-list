// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // Create a new list item
    const listItem = document.createElement("li");
  
    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
  
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(listItem);
  
    // Append task text and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
  
    // Add the list item to the task list
    taskList.appendChild(listItem);
  
    // Clear the input field
    taskInput.value = "";
  }
  