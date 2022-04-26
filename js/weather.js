const weather = document.querySelector("#weather");
const weatherName = weather.querySelector("span:first-child");
const weatherTemp = weather.querySelector("span:nth-child(2)");
const weatherMain = weather.querySelector("span:last-child");

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "40febf8231c32c9d001b93cde5499613";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(weatherUrl)
    .then((res) => {
      return res.json(); // 스트림을 가져와 스트림이 완료될 떄까지 읽은 후 body 텍스트를 Promise 형태로 반환한다.
      // return JSON.stringify(res);
    })
    .then((json) => {
      weatherName.innerText = json.name;
      weatherTemp.innerText = `${json.main.temp} / `;
      weatherMain.innerText = json.weather[0].description;
    });
});
