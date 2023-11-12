const express = require('express');
const router = express.Router();
const PokemonService = require('../services/pokemones.service'); // Exporte de los servicios

// Instanciación de la clase con los servicios
const service = new PokemonService();



// Con el siguiente endpoint muestra todos los pokemon disponibles
// Ejemplo: /api/v1/pokemones/
router.get('/', async (req, res) => {
  const pokemon = await service.find();
  res.json(pokemon);
});


// Con el siguiente endpoint podemos filtrar por nombre
// Ejemplo: /api/v1/pokemones/Pikachu
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const pokemon = await service.findByName(name);
  res.json(pokemon);
});



// Con el siguiente endpoint podemos filtrar por id
// Ejemplo: /api/v1/pokemones/025
router.get('/:pokemonID', async (req, res) => {
  const { detailID } = req.params;
  const pokemon = await service.findByID(detailID);
  res.json(pokemon);
});




router.post('/', async (req, res) => {
  const body = req.body;
  const newPokemon = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newPokemon
  });
});

router.patch('/:pokemonID', async (req, res) => {
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
    res.status(404).json({
      message: error.message
    })
  }
});

router.delete('/:pokemonID', async (req, res) => {
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
