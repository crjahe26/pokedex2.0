const Joi = require('joi');

const pokemonID = Joi.number().integer();
const evolutionID = Joi.number().integer();

const createPokemonEvolutionSchema = Joi.object({
  pkm_id: pokemonID.required(),
  evol_id: evolutionID
});

const updatePokemonEvolutionSchema = Joi.object({
  pkm_id: pokemonID,
  evol_id: evolutionID
});

const getPokemonEvolutionSchema = Joi.object({
  pkm_id: pokemonID.required()
});

const deletePokemonEvolutionSchema = Joi.object({
  pkm_id: pokemonID.required()
});



module.exports = { createPokemonEvolutionSchema, updatePokemonEvolutionSchema, getPokemonEvolutionSchema, deletePokemonEvolutionSchema };
