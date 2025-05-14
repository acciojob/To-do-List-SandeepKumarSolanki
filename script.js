let InputField = document.getElementById('newTodoInput');
let btn = document.getElementById('addTodoBtn');
let todoList = document.getElementById('todoList');

btn.addEventListener('click', function (e) {
  e.preventDefault(); // stop form submit if it's in a form

  const InputFieldValue = InputField.value.trim(); // trim to ignore accidental spaces

  if (InputFieldValue !== '') {
    const li = document.createElement('li');
    li.innerText = InputFieldValue;
    todoList.appendChild(li); // use appendChild for better clarity
    InputField.value = '';    // clear input only if item added
  }
});
