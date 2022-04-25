alert("본 홈페이지는 상업적 이용을 하지 않는 포트폴리오용 홈페이지 입니다.");

const loginForm = document.querySelector("form");
const loginInput = loginForm.querySelector("input:first-child");
const loginButton = loginForm.querySelector("input:last-child");
const loginName = document.querySelector("h2");

const KEY_NAME = "login info";
const CLASS_HIDDEN = "hidden";

function loginOk(value) {
  loginName.classList.remove(CLASS_HIDDEN);
  loginName.innerText = `안녕하세요 ${value}님 좋은 하루 보내세요!`;
}

function onSubmitInput(e) {
  e.preventDefault();
  const value = loginInput.value;
  localStorage.setItem(KEY_NAME, value);
  loginForm.classList.add(CLASS_HIDDEN);
  location.reload();
  loginOk();
}
const localValue = localStorage.getItem(KEY_NAME);
const quotes = document.querySelector("#quotes");
const bgImgEl = document.querySelector(".bgImg");
if (localValue === null) {
  loginForm.classList.remove(CLASS_HIDDEN);
  loginForm.addEventListener("submit", onSubmitInput);
  bgImgEl.classList.add("hidden");
} else {
  loginOk(localValue);
  todo.classList.remove("hidden");
  clock.classList.remove("hidden");
  quotes.classList.remove("hidden");
}
