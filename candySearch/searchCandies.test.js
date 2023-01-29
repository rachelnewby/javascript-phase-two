const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns Mars and Maltesers in an array', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  })
  it('returns Mars in an array', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  })
  it('returns Skitties, Skittles, Starburst in an array', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
  })
  it('returns Skitties, Skittles, in an array', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
  })
  it('returns Mars and Malteasers in an array', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
  })
})
