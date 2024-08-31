
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('task');
const priorityInput = document.getElementById("priority");
const todoTable = document.getElementById('taskTable');

function addTask(task , priority) {
  const row = todoTable.insertRow();
  const taskCell = row.insertCell(0);
  const PriorityCell=row.insertCell(1)
  const actionsCell = row.insertCell(2);
  taskCell.textContent=task;
  PriorityCell.textContent=priority;
  PriorityCell.classList.add(priority);
  actionsCell.innerHTML = '<button class="edit-task" style="background-color: blue; font-weight: bolder; font-size:large;"><i class="icon-edit"></i>Edit</button> <button class="delete-task" style="background-color: red; font-weight: bolder; font-size:large;"><i class="icon-trash"></i>Delete</button>';
}

function editTask(row,task,priority) {
  const taskCell = row.cells[0];
  const PriorityCell = row.cells[1];
  const actionsCell = row.cells[2];
  taskCell.textContent = task;
  PriorityCell.textContent=priority;
  PriorityCell.classList.add(priority);
  actionsCell.innerHTML = '<button class="edit-task" style="background-color: blue; font-weight: bolder; font-size:large;"><i class="icon-edit"></i>Edit</button> <button class="delete-task" style="background-color: red; font-weight: bolder; font-size:large;"><i class="icon-trash"></i>Delete</button>'; 
}

function deleteTask(row) {
  todoTable.deleteRow(row.rowIndex);
}

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = document.getElementById('task').value;
  const priority=document.getElementById('priority').value;
  addTask(task,priority);
  todoForm.reset();
});

todoTable.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-task')) {
    const row = event.target.parentElement.parentElement;
    const task = prompt('Enter the updated task:');
    const priority = prompt('Enter the updated priority:');
    if (task) {
      editTask(row, task,priority);
    }
  } else if (event.target.classList.contains('delete-task')) {
    const row = event.target.parentElement.parentElement;
    deleteTask(row);
  }
});


// Example tasks
addTask('Html' ,'High');