const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('returns the temperature', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  })
  it('turns the temp up and returns the new temperature', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  })
  it('turns the temp down and returns the new temperature', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it('will stop increasing temp if psm is true', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })
  it('will stop increasing temp above 32 is psm is false', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  })

  it('will stop increasing temp above 32 is psm is false', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it('will stop decreasing temp below 10', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })

})