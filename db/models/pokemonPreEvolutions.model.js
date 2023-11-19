const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_PREEVOLUTION_TABLE = 'pokemon_preevolution';

const PokemonPreEvolutionSchema = {
    evol_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    e_id:{
        allowNull: true,
        type: DataTypes.INTEGER
    }
}

class PokemonPreEvolution extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_PREEVOLUTION_TABLE,
            modedlName: 'Pokemon_preevolution',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_PREEVOLUTION_TABLE, PokemonPreEvolutionSchema, PokemonPreEvolution }