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
    static associate(models) {
        // Relación con Pokemon (0 - n)
        this.belongsToMany(models.Pokemon, {
            foreignKey: 'l_id',
            as: 'pokemon'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POKEMON_LOCATION_TABLE,
            modedlName: 'pokemon_location',
            timestamps: false
        }
    }
}


module.exports = { POKEMON_LOCATION_TABLE, PokemonLocationSchema, PokemonLocation }