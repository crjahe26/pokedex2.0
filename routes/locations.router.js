const express = require('express');
const LocationService = require('../services/location.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createLocationSchema, deleteLocationSchema, getLocationSchema, updateLocationSchema } = require('../schemas/pokemonLocation.schema');

const router = express.Router();
const service = new LocationService();

router.get('/',
  async (req, res, next) => {
    try {
      const location = await service.find();
      res.json(location);
    } catch(error){
      next(error);
    }
});

router.get('/:l_id',
  validatorHandler(getLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { l_id } = req.params;
      const location = await service.findOne(l_id);
      res.json(location);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/name/:l_name',
  validatorHandler(getLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { l_name } = req.params;
      const location = await service.findByField(l_name);
      res.json(location);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLocation = await service.create(body);
      res.status(201).json({
        message: 'created',
        newLocation
      });
    }
    catch(error){
      next(error);
  }
});

router.patch('/:l_id',
  validatorHandler(getLocationSchema,'params'),
  validatorHandler(updateLocationSchema,'body'),
  async (req, res, next) => {
  try {
    const { l_id } = req.params;
    const body = req.body;
    const location = await service.update(l_id, body)
    res.json({
      message: 'update',
      data: location,
      l_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:l_id',
  validatorHandler(getLocationSchema,'params'),
  validatorHandler(deleteLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { l_id } = req.params;
      const location = await service.delete(l_id)
      res.json({
        message: 'deleted',
        l_id,
        location
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
