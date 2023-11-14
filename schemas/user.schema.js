const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const name = Joi.string().min(3);

const createUserSchema = Joi.object({
  u_email: email.required(),
  u_password: password.required(),
  u_name: name.required()
});

const updateUserSchema = Joi.object({
  u_email: email,
  u_name: name,
  u_password: password
});

const getUserSchema = Joi.object({
  u_id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };