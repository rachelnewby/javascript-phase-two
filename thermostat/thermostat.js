class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = false;
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.psm === false && this.temperature < 32) {
      this.temperature ++
    } else if (this.psm === true && this.temperature < 25) {
      this.temperature ++
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --
    }
  }

  setPowerSavingMode(boolean) {
    this.psm = boolean;
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;