// Get references to input, button, and list
let InputField = document.getElementById('newTodoInput');
let btn = document.getElementById('addTodoBtn');
let todoList = document.getElementById('todoList');

// Handle button click
btn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent any default behavior (just in case)

  let InputFieldValue = InputField.value.trim(); // Remove leading/trailing spaces

  if (InputFieldValue !== '') {
    // Create new list item
    let li = document.createElement('li');
    li.innerText = InputFieldValue;

    // Add list item to the todo list
    todoList.appendChild(li);

    // Clear the input field after adding
    InputField.value = '';
  }
});
