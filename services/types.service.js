const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonTypes } = require('../db/models/pokemonTypes.model');

class TypesService {
    constructor(){}

    async create(data) {
      const newTypes = await models.PokemonTypes.create(data);
      return newTypes;
    }
  
    async find(){
      const rta = await models.PokemonTypes.findAll();
      return rta;
    }
  
    async findByField(value) {
      const types = await models.PokemonTypes.findOne({
          where: {
              ['t_name']: value
          }
      });
  
      if (!types) {
          throw boom.notFound('Types not found');
      }
  
      return { types };
    }
  
    async findOne(pt_id){
      const types = await models.PokemonTypes.findByPk(pt_id);
      if (!types) {
          throw boom.notFound('Types not found');
      }
      return { types };
    }
  
    async update(pt_id, changes){
      const types = await this.findOne(pt_id);
      const [idUpdated, updatedUser] = await PokemonTypes.update(changes,  {where: { pt_id: pt_id }, returning:true});
      return {idUpdated, updatedUser};
    }
  
    async delete(pt_id){
      const types = await this.findOne(pt_id);
      await PokemonTypes.destroy({where: { pt_id: pt_id }});
      return { pt_id, types };
  }
  }

  module.exports = TypesService;