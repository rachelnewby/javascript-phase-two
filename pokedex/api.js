function fetchPokemon(pokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let pokemonResult = {
        name: data.name,
        id: data.id,
        height: data.height, 
        weight: data.weight, 
        types: data.types.map(object => object.type.name)
      } 
      return pokemonResult
    })
  }

module.exports = fetchPokemon;