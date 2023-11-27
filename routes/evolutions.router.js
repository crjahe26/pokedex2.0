const express = require('express');
const EvolutionsService = require('../services/evolutions.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createPokemonEvolutionSchema, deletePokemonEvolutionSchema, getPokemonEvolutionSchema, updatePokemonEvolutionSchema } = require('../schemas/pokemonEvolution.schema');

const router = express.Router();

const service = new EvolutionsService();

router.get('/',
  async (req, res, next) => {
    try {
      const evolution = await service.find();
      res.json(evolution);
    } catch(error){
      next(error);
    }
});

router.get('/:pkm_id',
  validatorHandler(getPokemonEvolutionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pkm_id } = req.params;
      const evolution = await service.findOne(pkm_id);
      res.json(evolution);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(createPokemonEvolutionSchema, 'body'),
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

router.patch('/:pkm_id',
  validatorHandler(getPokemonEvolutionSchema,'params'),
  validatorHandler(updatePokemonEvolutionSchema,'body'),
  async (req, res, next) => {
  try {
    const { pkm_id } = req.params;
    const body = req.body;
    const evolution = await service.update(pkm_id, body)
    res.json({
      message: 'update',
      data: evolution,
      pkm_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:pkm_id',
  validatorHandler(getPokemonEvolutionSchema,'params'),
  validatorHandler(deletePokemonEvolutionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pkm_id } = req.params;
      const pokemon = await service.delete(pkm_id)
      res.json({
        message: 'deleted',
        pkm_id,
        pokemon
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
