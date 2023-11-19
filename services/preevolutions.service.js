const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonPreEvolution } = require('../db/models/pokemonPreEvolutions.model');

class PreEvolutionsService {
  constructor(){}

  async create(data) {
    const newEvolution = await models.PokemonPreEvolution.create(data);
    return newEvolution;
  }

  async find(){
    const rta = await models.PokemonPreEvolution.findAll();
    return rta;
  }

  async findOne(evol_id){
    const evolution = await models.PokemonPreEvolution.findByPk(evol_id);
    if (!evolution) {
        throw boom.notFound('Evolution not found');
    }
    return { evolution };
  }

  async update(evol_id, changes){
    const evolution = await this.findOne(evol_id);
    const [idUpdated, updatedEvolution] = await PokemonPreEvolution.update(changes,  {where: { evol_id: evol_id }, returning:true});
    return {idUpdated, updatedEvolution};
  }

  async delete(evol_id){
    const evolution = await this.findOne(evol_id);
    await PokemonPreEvolution.destroy({where: { evol_id: evol_id }});
    return { evol_id, evolution };
}
}



module.exports = PreEvolutionsService;
