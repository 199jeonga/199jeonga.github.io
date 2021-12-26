

const logIn = document.querySelector('.logIn');
const form = logIn.querySelector('#loginForm');
const input = form.querySelector('input');
const button = form.querySelector('button');
const greeting = logIn.querySelector('#greeting');

const HIDDEN = 'hidden';
const USERNAME = 'user__name';

const fnLogIn = (e)=>{
  e.preventDefault();
  form.classList.add(HIDDEN);
  const userName = input.value;
  localStorage.setItem(USERNAME, userName);
  fnGreting(userName);
}
const fnGreting = (userName)=>{
  greeting.innerText = `${userName}님이 로그인 하셨습니다!`;
  greeting.classList.remove(HIDDEN);
}

const saveUserName = localStorage.getItem(USERNAME);
if(!saveUserName){
  form.classList.remove(HIDDEN);
  form.addEventListener('submit', fnLogIn);
}else{
  fnGreting(saveUserName);
  form.classList.add(HIDDEN);
}