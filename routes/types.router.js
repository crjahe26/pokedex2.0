const express = require('express');
const TypesService = require('../services/types.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createPokemonTypesSchema, deletePokemonTypesSchema, getPokemonTypesSchema, updatePokemonTypesSchema } = require('../schemas/pokemonTypes.schema');

const router = express.Router();
const service = new TypesService();

router.get('/',
  async (req, res, next) => {
    try {
      const pokemon = await service.find();
      res.json(pokemon);
    } catch(error){
      next(error);
    }
});

router.get('/:pt_id',
  validatorHandler(getPokemonTypesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pt_id } = req.params;
      const type = await service.findOne(pt_id);
      res.json(type);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPokemonTypesSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newType = await service.create(body);
      res.status(201).json({
        message: 'created',
        newType
      });
    }
    catch(error){
      next(error);
  }
});

router.patch('/:pt_id',
  validatorHandler(getPokemonTypesSchema,'params'),
  validatorHandler(updatePokemonTypesSchema,'body'),
  async (req, res, next) => {
  try {
    const { pt_id } = req.params;
    const body = req.body;
    const type = await service.update(pt_id, body)
    res.json({
      message: 'update',
      data: type,
      pt_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:pt_id',
  validatorHandler(getPokemonTypesSchema,'params'),
  validatorHandler(deletePokemonTypesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pt_id } = req.params;
      const type = await service.delete(pt_id)
      res.json({
        message: 'deleted',
        pt_id,
        type
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
