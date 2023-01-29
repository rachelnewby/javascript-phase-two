const apiKey = require('./apiKey');
const city = 'High Wycombe';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    let weatherInfo = {
      temp: weatherData.main.temp,
      type: weatherData.weather[0].main
    }
    console.log(weatherInfo)
  })

console.log('Requesting weather data');