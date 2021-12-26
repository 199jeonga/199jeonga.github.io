
const toDo = document.querySelector('.toDo');
const TODOLIST = 'toto list';

const todoForm = toDo.querySelector('#todoForm');
const todoinput = toDo.querySelector('input');
const todoButton = toDo.querySelector('button');

const fnTodoInput = (e)=>{
  e.preventDefault();
  const li = document.createElement('li');
  
  toDo.append(todoinput.value);
  
}

todoButton.addEventListener('submit',fnTodoInput );

