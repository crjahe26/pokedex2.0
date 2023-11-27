const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonType } = require('../db/models/pokemonType.model');

class TypeService {
    constructor(){}

    async create(data) {
      const newType = await models.PokemonType.create(data);
      return newType;
    }
  
    async find(){
      const rta = await models.PokemonType.findAll();
      return rta;
    }
  
    async findByField(value) {
      const type = await models.PokemonType.findOne({
          where: {
              ['t_name']: value
          }
      });
  
      if (!type) {
          throw boom.notFound('Type not found');
      }
  
      return { type };
    }
  
    async findOne(t_id){
      const type = await models.PokemonType.findByPk(t_id);
      if (!type) {
          throw boom.notFound('Type not found');
      }
      return { type };
    }
  
    async update(t_id, changes){
      const type = await this.findOne(t_id);
      const [idUpdated, updatedUser] = await PokemonType.update(changes,  {where: { t_id: t_id }, returning:true});
      return {idUpdated, updatedUser};
    }
  
    async delete(t_id){
      const type = await this.findOne(t_id);
      await PokemonType.destroy({where: { t_id: t_id }});
      return { t_id, type };
  }
  }

  module.exports = TypeService;