const express = require('express');
const PokemonService = require('../services/pokemones.service'); // Exporte de los servicios
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createPokemonSchema, deletePokemonSchema, getPokemonSchema } = require('../schemas/pokemones.schema');

// Instanciación de la clase con los servicios
const service = new PokemonService();



// Con el siguiente endpoint muestra todos los pokemon disponibles
// Ejemplo: /api/v1/pokemones/
router.get('/', async (req, res) => {
  const pokemon = await service.find();
  res.json(pokemon);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});






// Con el siguiente endpoint podemos filtrar por id
// Ejemplo: /api/v1/pokemones/025
router.get('/:pokemonID',
  validatorHandler(getPokemonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pokemonID } = req.params;
      const pokemon = await service.findByID(pokemonID);
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
  validatorHandler(createPokemonSchema, 'params'),
  async (req, res) => {
    const body = req.body;
    const newPokemon = await service.create(body);
    res.status(201).json({
      message: 'created',
      newPokemon
    });
});

router.patch('/:pokemonID', async (req, res, next) => {
  try {
    const { pokemonID } = req.params;
    const body = req.body;
    const pokemon = await service.update(pokemonID, body)
    res.json({
      message: 'update',
      data: pokemon,
      pokemonID
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:pokemonID',
  validatorHandler(deletePokemonSchema, 'params'),
  async (req, res) => {
    try {
      const { pokemonID } = req.params;
      const pokemon = await service.delete(pokemonID)
      res.json({
        message: 'deleted',
        pokemonID,
        pokemon
      });
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});


module.exports = router;
