const Joi = require('joi');

const locationID = Joi.number();
const locationName = Joi.string().min(3).max(20);


const createLocationSchema = Joi.object({
  l_id: locationID.required(),
  l_name: locationName.required()
});

const deleteLocationSchema = Joi.object({
  l_id: locationID.required()
});

const getLocationSchema = Joi.object({
  l_name: locationName,
  l_id: locationID
});

const updateLocationSchema = Joi.object({
  l_name: locationName,
  l_id: locationID
});


module.exports = { createLocationSchema, deleteLocationSchema, getLocationSchema, updateLocationSchema };
