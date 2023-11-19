const { Model, DataTypes, Sequelize } = require('sequelize');
const { POKEMON_LOCATION_TABLE } = require("./pokemon_location.model");

const POKEMON_TABLE = 'pokemon';

const PokemonSchema = {
    p_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    p_name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    p_imagesrc: {
        allowNull: false,
        type: DataTypes.STRING
    },
    p_description:{
        allowNull: false,
        type: DataTypes.STRING
    },
    l_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: POKEMON_LOCATION_TABLE, key: "l_id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    }  
}

class Pokemon extends Model {
    static associate(models) {
        // Relación con PokemonEvolution (0 - n)
        this.hasMany(models.PokemonEvolution, { foreignKey: 'pkm_id', as: 'evolutions' });

        // Relación con PokemonPreEvolution (1)
        this.hasOne(models.PokemonPreEvolution, { foreignKey: 'evol_id', as: 'preEvolution' });

        // Relación con Location
        this.hasMany(models.PokemonLocation, {
            foreignKey: 'l_id',
            as: 'pokemon_location'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_TABLE,
            modedlName: 'Pokemon',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_TABLE, PokemonSchema, Pokemon }