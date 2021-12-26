//clock

const clock = document.querySelector('.clock');

const fnClock = ()=>{  
  let date = new Date();
  clock.innerText = `${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초` 
}

fnClock();
setInterval( fnClock , 1000 );
