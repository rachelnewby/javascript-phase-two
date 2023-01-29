const Candy = require('./candy');

describe('Candy', () => {
  it('returns the candy name', () => {
    let bounty = new Candy('Bounty', 2.99);
    expect(bounty.getName()).toEqual('Bounty');
  })
  it('returns the candy price', () => {
    let bounty = new Candy('Bounty', 2.99);
    expect(bounty.getPrice()).toEqual(2.99);
  })
})