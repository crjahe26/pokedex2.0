const Joi = require('joi');

const evolutionID = Joi.number().integer();
const pokemonEvolutionID = Joi.number().integer();

const createPokemonPreEvolutionSchema = Joi.object({
  evol_id: evolutionID.required(),
  e_id: pokemonEvolutionID
});

const updatePokemonPreEvolutionSchema = Joi.object({
  evol_id: evolutionID,
  e_id: pokemonEvolutionID
});

const getPokemonPreEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
});

const deletePokemonPreEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
  });



module.exports = { createPokemonPreEvolutionSchema, updatePokemonPreEvolutionSchema, getPokemonPreEvolutionSchema, deletePokemonPreEvolutionSchema };
