const express = require('express');
const PreEvolutionsService = require('../services/preevolutions.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createPokemonPreEvolutionSchema, deletePokemonPreEvolutionSchema, getPokemonPreEvolutionSchema, updatePokemonPreEvolutionSchema } = require('../schemas/pokemonPreEvolution.schema');

const router = express.Router();

const service = new PreEvolutionsService();

router.get('/',
  async (req, res, next) => {
    try {
      const evolution = await service.find();
      res.json(evolution);
    } catch(error){
      next(error);
    }
});

router.get('/:evol_id',
  validatorHandler(getPokemonPreEvolutionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { evol_id } = req.params;
      const evolution = await service.findOne(evol_id);
      res.json(evolution);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(createPokemonPreEvolutionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPokemon = await service.create(body);
      res.status(201).json({
        message: 'created',
        newPokemon
      });
    }
    catch(error){
      next(error);
  }
});

router.patch('/:evol_id',
  validatorHandler(getPokemonPreEvolutionSchema,'params'),
  validatorHandler(updatePokemonPreEvolutionSchema,'body'),
  async (req, res, next) => {
  try {
    const { evol_id } = req.params;
    const body = req.body;
    const evolution = await service.update(evol_id, body)
    res.json({
      message: 'update',
      data: evolution,
      evol_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:evol_id',
  validatorHandler(getPokemonPreEvolutionSchema,'params'),
  validatorHandler(deletePokemonPreEvolutionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { evol_id } = req.params;
      const pokemon = await service.delete(evol_id)
      res.json({
        message: 'deleted',
        evol_id,
        pokemon
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
