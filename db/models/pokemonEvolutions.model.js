const { Model, DataTypes, Sequelize } = require('sequelize');

const POKEMON_EVOLUTION_TABLE = 'pokemon_evolution';

const PokemonEvolutionSchema = {
    pkm_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    evol_id:{
        allowNull: true,
        type: DataTypes.INTEGER
    }
}

class PokemonEvolution extends Model {
    static associate(models) {
        // Relación con Pokemon (1)
        this.belongsTo(models.Pokemon, { foreignKey: 'pkm_id', as: 'pokemon' });
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