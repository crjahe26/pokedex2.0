const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_TYPE_TABLE = 'pokemon_type';

const PokemonTypeSchema = {
    t_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    t_name:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

class PokemonType extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_TYPE_TABLE,
            modedlName: 'Pokemon_type',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_TYPE_TABLE, PokemonTypeSchema, PokemonType }