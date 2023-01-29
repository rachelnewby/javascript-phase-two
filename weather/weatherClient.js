class WeatherClient {
  constructor() {
    this.apiKey = require('./apiKey');
  }

  fetchWeatherData(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`)
      .then((response) => response.json())
  }
}

module.exports = WeatherClient; 