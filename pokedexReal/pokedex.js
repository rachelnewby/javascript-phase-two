class Pokedex {
  constructor() {
    this.list = []
  }


  catch(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        this.list.push({
          name: data.name,
          id: data.id,
          height: data.height, 
          weight: data.weight, 
          types: data.types.map(object => object.type.name)
        });
      });
    };
    
  all() {
    return this.list.map(item => item.name)
  }
}


module.exports = Pokedex;

// catch = async (pokemon) => {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemon}`
//   );
//   const data = await response.json();
//   this.pokemon.push({
//     name: data.name,
//     id: data.id,
//     height: data.height,
//     weight: data.weight,
//     types: data.types.map((obj) => obj.type.name),
//   });
// };