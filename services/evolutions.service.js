const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonEvolution } = require('../db/models/pokemonEvolutions.model');

class EvolutionsService {
  // Pokemon iniciales
  constructor(){}

  // Crear un nuevo pokemon
  async create(data) {
    const newEvolution = await models.PokemonEvolution.create(data);
    return newEvolution;
  }

  async find(){
    const rta = await models.PokemonEvolution.findAll();
    return rta;
  }

  async findOne(evol_id){
    const evolution = await models.PokemonEvolution.findByPk(evol_id);
    if (!evolution) {
        throw boom.notFound('Evolution not found');
    }
    return { evolution };
  }

  async update(evol_id, changes){
    const evolution = await this.findOne(evol_id);
    const [idUpdated, updatedEvolution] = await PokemonEvolution.update(changes,  {where: { evol_id: evol_id }, returning:true});
    return {idUpdated, updatedEvolution};
  }

  async delete(evol_id){
    const evolution = await this.findOne(evol_id);
    await PokemonEvolution.destroy({where: { evol_id: evol_id }});
    return { evol_id, evolution };
}
}



module.exports = EvolutionsService;
