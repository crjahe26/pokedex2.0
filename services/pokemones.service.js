const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize')

class PokemonService {
  // Pokemon iniciales
  constructor(){
    this.pokemon = []
  }

  // Crear un nuevo pokemon
  async create(data) {
    const newPokemon = {
      data
    }
    this.pokemones.push(newPokemon);
    return newPokemon;
  }

  // Entregar todos los pokemon
  async find() {
    const query = 'SELECT * FROM pokemon';
    const [data, metadata] = await sequelize.query(query);
    return data;
  }

  // Buscar un pokemon a partir de su id
  async findByID(pokemonID) {
    //const pokemon = this.pokemones.find(pokemon => pokemon.pokemonID === pokemonID);
    const query = 'SELECT * FROM pokemon WHERE p_id = ' + pokemonID;
    const [pokemon, metadata] = await sequelize.query(query);
    if (!pokemon) {
      throw boom.notFound('Pokemon no encontrado');
    }
    return pokemon;
  }

/*   // Buscar un pokemon a partir de su nombre
  async findByName(name) {
    const pkms = [];
    for(let index = 0; index < this.pokemones.length; index++) {
      if ( this.pokemones[index].name.toLowerCase().includes(name.toLowerCase()) ) { // Otra opción es que haga el match completo así: name.toLowerCase() == listadoPokemones[index].name.toLowerCase(), pero me gustó más con el includes XD
        pkms.push(this.pokemones[index])
      }
    }
    if (pkms.lenght != 0 && name != '' && pkms[0] != null) {return pkms}
    else {return 'No se encontró ningún pokemon con ese nombre'}

  } */

  // Actualizar campos especificos de un pokemon a partir de su id
  async update(pokemonID, changes) {
    const index = this.pokemones.findIndex(pokemon => pokemon.pokemonID === pokemonID);
    if (index === -1) {
      throw boom.notFound('Pokemon no encontrado');
    }
    const pokemon = this.pokemones[index];
    this.pokemones[index] = {
      ...pokemon,
      ...changes
    };
    return this.pokemones[index];

  }

  // Eliminar un pokemon a partir de su id
  async delete(pokemonID) {
    const index = this.pokemones.findIndex(pokemon => pokemon.pokemonID === pokemonID);
    if (index === -1) {
      throw boom.notFound('Pokemon no encontrado');
    }
    this.pokemones.splice(index, 1);
    return {message: true, pokemonID}

  }
}






module.exports = PokemonService;
