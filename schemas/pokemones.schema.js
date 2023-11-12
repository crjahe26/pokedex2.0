const Joi = require('joi');

const pokemonID = Joi.string();
const name = Joi.string().alphanum().min(3).max(20);
const description = Joi.string().min(15);
const detailType = Joi.string().min(4);

const userName = Joi.string().alphanum().min(3).max(20);;
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string().alphanum().min(8).max(30);


const createPokemonSchema = Joi.object({
  name: name.required(),
  pokemonID: pokemonID.required(),
  description: description.required(),
  detailType: detailType.required(),
});

const deletePokemonSchema = Joi.object({
  pokemonID: pokemonID.required()
});

const getPokemonSchema = Joi.object({
  pokemonID: pokemonID.required()
});


const createUserSchema = Joi.object({
  userName: userName.required(),
  email: email.required(),
  password: password.required()
});

module.exports = { createPokemonSchema, deletePokemonSchema, getPokemonSchema, createUserSchema };
