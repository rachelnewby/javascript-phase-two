const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe("Weather", () => {

  const mockClient ={
    fetchWeatherData: jest.fn(),
  }
  it("Loads and displays weather data based on the weatherClient's city", (done) => {
    mockClient.fetchWeatherData.mockResolvedValue({
      name: 'Bristol', 
      temperature: 5.6
    });
    const weather = new Weather(mockClient);
    weather.load('Bristol').then(() => {
      expect(weather.getWeatherData().name).toBe('Bristol')
      expect(weather.getWeatherData().temperature).toBe(5.6)
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol')
      done();
    }).catch((error) => console.log(error))
  });
  it("Compares the weather of a given city with the weather of the loaded city", (done) => {
    mockClient.fetchWeatherData.mockResolvedValue({ 
      name: 'Bristol', 
      main: { 
        temp: 5.6
      }
    });
    const weather = new Weather(mockClient);
    weather.load('Bristol').then(() => {
      mockClient.fetchWeatherData.mockResolvedValue({
        name: 'High Wycombe',
        main: {
          temp: 6.0
        }
      })
      weather.compareWith('High Wycombe').then((city) => {
        expect(city).toBe('High Wycombe')
        done();
      })
    }).catch((error) => console.log(error))
  });

  it("Display the result of my api nicely", (done) => {
    io = { log: jest.fn() }
    mockClient.fetchWeatherData.mockResolvedValue({
      name: 'Bristol', 
      weather: [{
        main: 'Sunny'
      }],
      main: {
        temp: 6.88, 
        feels_like: 12,
        humidity: 90
      }
    });
    const weather = new Weather(mockClient, io);
    weather.load('Bristol').then(() => {
      weather.displayWeather()
      expect(io.log).toHaveBeenCalledWith('Name:         Bristol')
      expect(io.log).toHaveBeenCalledWith('Weather:      Sunny')
      expect(io.log).toHaveBeenCalledWith('Temperature:  6.88')
      expect(io.log).toHaveBeenCalledWith('Feels like:   12')
      expect(io.log).toHaveBeenCalledWith('Humidity:     90')
      done();
    }).catch((error) => console.log(error))
  });
})