const geolocation = document.querySelector('.geolocation');
const API_KEY = '40febf8231c32c9d001b93cde5499613';

const fnGeoOk = (position)=>{
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then( (response) => response.json() )
  .then( (data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = data.weather[0].main+'/'+data.main.temp+'도';
  });
}

const fnGeoError = ()=>{
  geolocation.innerText = 'error, 날씨를 불러올 수 없습니다.'
}

navigator.geolocation.getCurrentPosition(fnGeoOk,fnGeoError);
