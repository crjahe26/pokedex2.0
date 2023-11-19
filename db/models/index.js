const { Users, UsersSchema} = require('./users.model');
const { Pokemon, PokemonSchema} = require('./pokemon.model');
const { PokemonLocation, PokemonLocationSchema} = require('./pokemon_location.model');
const { PokemonEvolution, PokemonEvolutionSchema} = require('./pokemonEvolutions.model');
const { PokemonType, PokemonTypeSchema} = require('./pokemonType.model');
const { PokemonTypes, PokemonTypesSchema} = require('./pokemonTypes.model');
const { PokemonPreEvolution, PokemonPreEvolutionSchema} = require('./pokemonPreEvolutions.model');

function setupModels(sequelize) {
    Users.init(UsersSchema, Users.config(sequelize));
    Pokemon.init(PokemonSchema, Pokemon.config(sequelize));
    PokemonLocation.init(PokemonLocationSchema, PokemonLocation.config(sequelize));
    PokemonPreEvolution.init(PokemonPreEvolutionSchema, PokemonPreEvolution.config(sequelize));
    PokemonEvolution.init(PokemonEvolutionSchema, PokemonEvolution.config(sequelize));
    PokemonType.init(PokemonTypeSchema, PokemonType.config(sequelize));
    PokemonTypes.init(PokemonTypesSchema, PokemonTypes.config(sequelize));


    //Pokemon.associate(sequelize.models);
}

module.exports = setupModels;