const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { PokemonLocation } = require('../db/models/pokemon_location.model');

class LocationService {
    constructor(){}

    async create(data) {
        const newLocation = await models.PokemonLocation.create(data);
        return newLocation;
      }

    async find(){
        const rta = await models.PokemonLocation.findAll();
        return rta;
    }

    async findByField(value) {
        const location = await models.PokemonLocation.findOne({
            where: {
                ['l_name']: value
            }
        });
    
        if (!location) {
            throw boom.notFound('Location not found');
        }
    
        return { location };
      }

    async findOne(l_id){
        const location = await models.PokemonLocation.findByPk(l_id);
        if (!location) {
            throw boom.notFound('Location not found');
        }
        return { location };
      }
    
    async update(l_id, changes){
        const location = await this.findOne(l_id);
        const [idUpdated, updatedUser] = await PokemonLocation.update(changes,  {where: { l_id: l_id }, returning:true});
        return {idUpdated, updatedUser};
    }

    async delete(l_id){
        const location = await this.findOne(l_id);
        await PokemonLocation.destroy({where: { l_id: l_id }});
        return { l_id, location };
    }
}

module.exports = LocationService;