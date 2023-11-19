const Joi = require('joi');

const pokemonID = Joi.number();
const name = Joi.string().alphanum().min(3).max(20);
const description = Joi.string().min(15);
const imagesrc = Joi.string().min(4);
const location = Joi.string().min(2);


const createPokemonSchema = Joi.object({
  p_name: name.required(),
  p_id: pokemonID.required(),
  p_description: description.required(),
  p_imagesrc: imagesrc.required(),
  l_id: location
});

const deletePokemonSchema = Joi.object({
  p_id: pokemonID.required()
});

const getPokemonSchema = Joi.object({
  p_id: pokemonID,
  p_name: name
});

const updatePokemonSchema = Joi.object({
  p_name: name,
  p_id: pokemonID,
  p_description: description,
  p_imagesrc: imagesrc,
  l_id: location
});


module.exports = { createPokemonSchema, deletePokemonSchema, getPokemonSchema, updatePokemonSchema };
