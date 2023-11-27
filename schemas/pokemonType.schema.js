const Joi = require('joi');

const tipoID = Joi.number();
const tipoName = Joi.string().min(2);


const createPokemonTypeSchema = Joi.object({
  t_name: tipoName.required(),
  t_id: tipoID.required()
});

const deletePokemonTypeSchema = Joi.object({
  t_id: tipoID.required()
});

const getPokemonTypeSchema = Joi.object({
  t_id: tipoID,
  t_name: tipoName
});

const updatePokemonTypeSchema = Joi.object({
  t_name: tipoName
});


module.exports = { createPokemonTypeSchema, deletePokemonTypeSchema, getPokemonTypeSchema, updatePokemonTypeSchema };
