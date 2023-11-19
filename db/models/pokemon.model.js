const { Model, DataTypes, Sequelize } = require('sequelize');

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
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Pokemon extends Model {
    static associate(models) {
        this.belongsTo(models.PokemonEvolution, {as: 'preevolucion'})
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