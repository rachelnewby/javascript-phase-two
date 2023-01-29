class Weather {
  constructor(client, io=console) {
    this.client = client;
    this.io = io;
  }

  async load(city) { 
    this.client.fetchWeatherData(city).then((obj) => {
      this.data = obj
    });
  }

  getWeatherData() {
    return this.data
  }

  compareWith(city) {
    return this.client.fetchWeatherData(city).then((otherData) => {
      if (this.data.main.temp > otherData.main.temp) {
        return this.data.name
      } else {
        return otherData.name
      }
    })
  }

  displayWeather() {
    io.log(this.#formatForDisplay("Name", this.data.name))
    io.log(this.#formatForDisplay("Weather", this.data.weather[0].main))
    io.log(this.#formatForDisplay("Temperature", this.data.main.temp))
    io.log(this.#formatForDisplay("Feels like", this.data.main.feels_like))
    io.log(this.#formatForDisplay("Humidity", this.data.main.humidity))
  }

  #formatForDisplay(k, v) {
    const space = " "
    return `${k}:${space.repeat(13 - k.length)}${v}`
  }
}

module.exports = Weather;