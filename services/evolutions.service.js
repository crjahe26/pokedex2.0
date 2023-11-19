const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonEvolution } = require('../db/models/pokemonEvolutions.model');
const { Pokemon } = require('../db/models/pokemon.model');

class EvolutionsService {
  // Pokemon iniciales
  constructor(){}

  // Crear un nuevo pokemon
  async create(data) {
    const newEvolution = await models.PokemonEvolution.create(data);
    return newEvolution;
  }

  async find(){
    const rta = await models.PokemonEvolution.findAll(
      {
        include: [
          {
            model: Pokemon,
            as: 'pokemon',
            attributes: ['p_id', 'p_name']
          }
        ]
      }
    );
    return rta;
  }

  async findOne(pkm_id){
    const evolution = await models.PokemonEvolution.findByPk(pkm_id, {
      include: [
        {
          model: Pokemon,
          as: 'pokemon',
          attributes: ['p_id', 'p_name']  // Ajusta según las propiedades que desees recuperar
        }
      ]
    });
    if (!evolution) {
        throw boom.notFound('Evolution not found');
    }
    return { evolution };
  }

  async update(pkm_id, changes){
    const evolution = await this.findOne(pkm_id);
    const [idUpdated, updatedEvolution] = await PokemonEvolution.update(changes,  {where: { pkm_id: pkm_id }, returning:true});
    return {idUpdated, updatedEvolution};
  }

  async delete(pkm_id){
    const evolution = await this.findOne(pkm_id);
    await PokemonEvolution.destroy({where: { pkm_id: pkm_id }});
    return { pkm_id, evolution };
}
}



module.exports = EvolutionsService;
