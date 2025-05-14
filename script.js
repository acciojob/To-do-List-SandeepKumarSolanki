let inputField = document.getElementById('newTodoInput');
let addButton = document.getElementById('addTodoBtn');
let todoList = document.getElementById('todoList');

// Make sure DOM is ready
addButton.addEventListener('click', function () {
  let value = inputField.value.trim();

  if (value !== '') {
    let li = document.createElement('li');
    li.innerText = value;
    todoList.appendChild(li);
    inputField.value = ''; // clear input
  }
});
