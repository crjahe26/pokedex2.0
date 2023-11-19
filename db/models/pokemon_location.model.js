const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_LOCATION_TABLE = 'pokemon_location';

const PokemonLocationSchema = {
    l_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    l_name:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

class PokemonLocation extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_LOCATION_TABLE,
            modedlName: 'Pokemon_location',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_LOCATION_TABLE, PokemonLocationSchema, PokemonLocation }