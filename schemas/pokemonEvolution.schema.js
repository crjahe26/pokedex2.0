const Joi = require('joi');

const evolutionID = Joi.number().integer();
const preEvolutionID = Joi.number().integer();

const createPokemonEvolutionSchema = Joi.object({
  evol_id: evolutionID.required(),
  p_id: preEvolutionID
});

const updatePokemonEvolutionSchema = Joi.object({
  evol_id: evolutionID,
  p_id: preEvolutionID
});

const getPokemonEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
});

const deletePokemonEvolutionSchema = Joi.object({
    evol_id: evolutionID.required()
  });



module.exports = { createPokemonEvolutionSchema, updatePokemonEvolutionSchema, getPokemonEvolutionSchema, deletePokemonEvolutionSchema };
