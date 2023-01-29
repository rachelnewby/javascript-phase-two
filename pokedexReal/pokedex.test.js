const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('adds multiple pokemon to the pokedex and prints them with all', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    expect(pokedex.all()).toEqual(['pikachu', 'jigglypuff']);
  });
});