// const gitter1 = document.getElementById('gitter1')
// const appert2 = document.getElementById('appert2')

// getWeatherData()
// function getWeatherData() {
//     navigator.geolocation.getCurrentPosition((success) => {
//         let { latitude, longitude } = success.coords;
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEYSUZ}`).then(res => res.json()).then(data => {
//             console.log(data);
//             showWeatherData(data);
//         })
//     })
// }

// const API_KEYSUZ = '316b9736dbcafba7127d93281fa85cc0';
// function showWeatherData(data) {
//     let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;
//     gitter1.innerHTML = `
//     <div class="api" id="appert2">${humidity}</div>
//     `
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    fetch(`http://worldtimeapi.org/api/timezone/Asia/Tashkent`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // showWeatherData(data);
      });
  });
}
