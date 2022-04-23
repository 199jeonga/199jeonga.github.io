const clock = document.querySelector("#clock");

function clockFn() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `The current time is ${hours} : ${minutes} : ${seconds}`;
}
clockFn();
setInterval(clockFn, 1000);
