const express = require('express');
const PokemonService = require('../services/pokemones.service'); // Exporte de los servicios
const validatorHandler = require('../middlewares/validator.handler');

const { createPokemonSchema, deletePokemonSchema, getPokemonSchema, updatePokemonSchema } = require('../schemas/pokemones.schema');

const router = express.Router();
// Instanciación de la clase con los servicios
const service = new PokemonService();



// Con el siguiente endpoint muestra todos los pokemon disponibles
// Ejemplo: /api/v1/pokemones/
router.get('/',
  async (req, res, next) => {
    try {
      const pokemon = await service.find();
      res.json(pokemon);
    } catch(error){
      next(error);
    }
});

// Con el siguiente endpoint podemos filtrar por id
// Ejemplo: /api/v1/pokemones/025
router.get('/:p_id',
  validatorHandler(getPokemonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { p_id } = req.params;
      const pokemon = await service.findOne(p_id);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/name/:p_name',
  validatorHandler(getPokemonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { p_name } = req.params;
      const pokemon = await service.findByField(p_name);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
);


/* // Con el siguiente endpoint podemos filtrar por nombre
// Ejemplo: /api/v1/pokemones/Pikachu
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const pokemon = await service.findByName(name);
  res.json(pokemon);
}); */



router.post('/',
  validatorHandler(createPokemonSchema, 'body'),
  async (req, res, next) => {
    try {
      const { p_id, p_name, p_imagesrc, p_description } = req.body; // Recibe los datos del nuevo Pokémon desde el cuerpo de la solicitud

    // Crea un nuevo registro de Pokémon en la base de datos utilizando el modelo de Sequelize
    const newPokemon = await service.create({
      p_id,
      p_name,
      p_imagesrc,
      p_description,
      // Otros campos que podrías tener en tu modelo
    });
    res.status(201).json(newPokemon);
    }
    catch(error){
      next(error);
  }
});

router.patch('/:p_id',
  validatorHandler(getPokemonSchema,'params'),
  validatorHandler(updatePokemonSchema,'body'),
  async (req, res, next) => {
  try {
    const { p_id } = req.params;
    const body = req.body;
    const pokemon = await service.update(p_id, body)
    res.json({
      message: 'update',
      data: pokemon,
      p_id
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:p_id',
  validatorHandler(getPokemonSchema,'params'),
  validatorHandler(deletePokemonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { p_id } = req.params;
      const pokemon = await service.delete(p_id)
      res.json({
        message: 'deleted',
        p_id,
        pokemon
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
