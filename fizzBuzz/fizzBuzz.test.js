const fizzBuzz = require('./fizzBuzz')

describe('fizzbuzz', () => {
  it('returns FizzBuzz in place of multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  it('returns FizzBuzz in place of multiple of 3 and 5', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })
  it('returns Fizz in place of multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })
  it('returns Fizz in place of multiple of 3', () => {
    expect(fizzBuzz(18)).toBe('Fizz')
  })
  it('returns Buzz in place of multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })
  it('returns Buzz in place of multiple of 5', () => {
    expect(fizzBuzz(20)).toBe('Buzz')
  })
  it('returns its own number if its not a multiple of 3 or 5', () => {
    expect(fizzBuzz(8)).toBe(8)
  })
})