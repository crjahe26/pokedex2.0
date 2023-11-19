const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { Pokemon } = require('../db/models/pokemon.model');

class PokemonService {
  // Pokemon iniciales
  constructor(){}

  // Crear un nuevo pokemon
  async create(data) {
    const newPokemon = await models.Pokemon.create(data);
    return newPokemon;
  }

  async find(){
    const rta = await models.Pokemon.findAll();
    return rta;
  }

  async findByField(value) {
    const pokemon = await models.Pokemon.findOne({
        where: {
            ['p_name']: value
        }
    });

    if (!pokemon) {
        throw boom.notFound('Pokemon not found');
    }

    return { pokemon };
  }

  async findOne(p_id){
    const pokemon = await models.Pokemon.findByPk(p_id);
    if (!pokemon) {
        throw boom.notFound('Pokemon not found');
    }
    return { pokemon };
  }

  async update(p_id, changes){
    const pokemon = await this.findOne(p_id);
    const [idUpdated, updatedUser] = await Pokemon.update(changes,  {where: { p_id: p_id }, returning:true});
    return {idUpdated, updatedUser};
  }

  async delete(p_id){
    const pokemon = await this.findOne(p_id);
    await Pokemon.destroy({where: { p_id: p_id }});
    return { p_id, pokemon };
}
}






module.exports = PokemonService;
