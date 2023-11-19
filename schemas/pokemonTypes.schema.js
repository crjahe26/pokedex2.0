const Joi = require('joi');

const pokemonID = Joi.number();
const tipoID = Joi.number();
const primaryID = Joi.number();


const createPokemonTypesSchema = Joi.object({
  pt_id: primaryID.required(), // primarykey
  p_id: pokemonID.required(), // id del Pokemon
  t_id: tipoID.required() //id del tipo
});

const deletePokemonTypesSchema = Joi.object({
  pt_id: primaryID.required()
});

const getPokemonTypesSchema = Joi.object({
  pt_id: primaryID.required()
});

const updatePokemonTypesSchema = Joi.object({
  p_id: pokemonID,
  t_id: tipoID
});


module.exports = { createPokemonTypesSchema, deletePokemonTypesSchema, getPokemonTypesSchema, updatePokemonTypesSchema };
