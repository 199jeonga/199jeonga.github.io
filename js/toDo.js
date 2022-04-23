const todo = document.querySelector("#todo");
const todoForm = todo.querySelector("form");
const todoInput = todo.querySelector("input");
const todoUl = todo.querySelector("ul");
const KEY_TODOTITLE = "todo list";
const localArr = [];

function savedLocal(value) {
  localStorage.setItem(KEY_TODOTITLE, value);
}
function fnTodoDelete(event) {
  const eventel = event.target.parentNode;
  localArr.filter((data) => data.id !== eventel.id);
  console.log(localArr);
}
function fnTodoWrite(todoValue) {
  const li = document.createElement("li");
  const liText = document.createElement("span");
  liText.innerText = todoValue;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", fnTodoDelete);
  li.appendChild(liText);
  li.appendChild(btn);
  todoUl.appendChild(li);
}
function fnTodoEvent(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const newTodo = {
    id: new Date(),
    text: todoValue,
  };
  // savedLocal();
  fnTodoWrite(newTodo.text);
}
todoForm.addEventListener("submit", fnTodoEvent);
