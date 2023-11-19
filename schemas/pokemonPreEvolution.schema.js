const Joi = require('joi');

const evolutionID = Joi.number().integer();
const pokemonEvolutionID = Joi.number().integer();

const createPokemonPreEvolutionSchema = Joi.object({
  evol_id: evolutionID.required(),
  pre_id: pokemonEvolutionID
});

const updatePokemonPreEvolutionSchema = Joi.object({
  evol_id: evolutionID,
  pre_id: pokemonEvolutionID
});

const getPokemonPreEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
});

const deletePokemonPreEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
  });



module.exports = { createPokemonPreEvolutionSchema, updatePokemonPreEvolutionSchema, getPokemonPreEvolutionSchema, deletePokemonPreEvolutionSchema };
