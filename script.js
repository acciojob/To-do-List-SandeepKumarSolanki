//your code here
let InputField = document.getElementById('newTodoInput')
let btn = document.getElementById('addTodoBtn');
let todoList = document.getElementById('todoList');

btn.addEventListener('click' , (e)=>{
	e.preventDefault();
	let InputFieldValue = InputField.value;
	if(InputFieldValue.length > 0){
		let li = document.createElement('li');
		li.innerText = `${InputFieldValue}`
		todoList.append(li);
	}
	
	InputField.value = '';
})
