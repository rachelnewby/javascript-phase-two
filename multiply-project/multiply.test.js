const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 3 and 4', () => {
    expect(multiply(3, 4)).toBe(12);
  })
  it('multiplies 2 and 8', () => {
    expect(multiply(2, 8)).toBe(16);
  })
})