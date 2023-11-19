const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_TYPES = 'pokemon_types';

const PokemonTypesSchema = {
    pt_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    p_id:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    t_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class PokemonTypes extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_TYPES,
            modedlName: 'Pokemon_types',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_TYPES, PokemonTypesSchema, PokemonTypes }