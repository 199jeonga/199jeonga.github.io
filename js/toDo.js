const todo = document.querySelector("#todo");
const todoForm = todo.querySelector("form");
const todoInput = todo.querySelector("input");
const todoUl = todo.querySelector("ul");
const KEY_TODOTITLE = "todo list";
let localArr = [];

function savedLocal() {
  localStorage.setItem(KEY_TODOTITLE, JSON.stringify(localArr));
}
function fnTodoDelete(e) {
  const eventEl = e.target.parentElement;
  const DelEl = localArr.filter((data) => String(data.id) !== eventEl.id);
  eventEl.remove();
  localArr = DelEl;
  savedLocal(localArr);
}

function fnTodoWrite(todoValue) {
  const li = document.createElement("li");
  li.id = todoValue.id;
  const liText = document.createElement("span");
  liText.innerText = todoValue.text;
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
    id: Date.now(),
    text: todoValue,
  };
  localArr.push(newTodo);
  savedLocal();
  fnTodoWrite(newTodo);
}
todoForm.addEventListener("submit", fnTodoEvent);

const tranceLocalData = localStorage.getItem(KEY_TODOTITLE);
if (tranceLocalData !== null) {
  savedLocalData = JSON.parse(tranceLocalData);
  localArr = savedLocalData;
  savedLocalData.forEach(fnTodoWrite);
}
