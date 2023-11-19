const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_EVOLUTION_TABLE = 'pokemon_evolution';

const PokemonEvolutionSchema = {
    evol_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    p_id:{
        allowNull: true,
        type: DataTypes.INTEGER
    }
}

class PokemonEvolution extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_EVOLUTION_TABLE,
            modedlName: 'Pokemon_evolution',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_EVOLUTION_TABLE, PokemonEvolutionSchema, PokemonEvolution }