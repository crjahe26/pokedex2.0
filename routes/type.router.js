const express = require('express');
const TypeService = require('../services/type.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createPokemonTypeSchema, deletePokemonTypeSchema, getPokemonTypeSchema, updatePokemonTypeSchema } = require('../schemas/pokemonType.schema');

const router = express.Router();
const service = new TypeService();

router.get('/',
  async (req, res, next) => {
    try {
      const pokemon = await service.find();
      res.json(pokemon);
    } catch(error){
      next(error);
    }
});

router.get('/:t_id',
  validatorHandler(getPokemonTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { t_id } = req.params;
      const type = await service.findOne(t_id);
      res.json(type);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/name/:t_name',
  validatorHandler(getPokemonTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { t_name } = req.params;
      const type = await service.findByField(t_name);
      res.json(type);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPokemonTypeSchema, 'body'),
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

router.patch('/:t_id',
  validatorHandler(getPokemonTypeSchema,'params'),
  validatorHandler(updatePokemonTypeSchema,'body'),
  async (req, res, next) => {
  try {
    const { t_id } = req.params;
    const body = req.body;
    const type = await service.update(t_id, body)
    res.json({
      message: 'update',
      data: type,
      t_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:t_id',
  validatorHandler(getPokemonTypeSchema,'params'),
  validatorHandler(deletePokemonTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { t_id } = req.params;
      const type = await service.delete(t_id)
      res.json({
        message: 'deleted',
        t_id,
        type
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
