const express = require('express');
const router = express.Router();
const PokemonService = require('../services/pokemones.service'); // Exporte de los servicios

// Instanciación de la clase con los servicios
const service = new PokemonService();



// Con el siguiente endpoint muestra todos los pokemon disponibles
// Ejemplo: /api/v1/pokemones/
router.get('/', (req, res) => {
  const pokemon = service.find();
  res.json(pokemon);
});


// Con el siguiente endpoint podemos filtrar por nombre
// Ejemplo: /api/v1/pokemones/Pikachu
router.get('/:name', (req, res) => {
  const { name } = req.params;
  const pokemon = service.findByName(name);
  res.json(pokemon);
});



// Con el siguiente endpoint podemos filtrar por id
// Ejemplo: /api/v1/pokemones/025
router.get('/:detailID', (req, res) => {
  const { detailID } = req.params;
  const pokemon = service.findByID(detailID);
  res.json(pokemon);
});




router.post('/', (req, res) => {
  const body = req.body;
  const newPokemon = service.create(body);
  res.status(201).json({
    message: 'created',
    data: newPokemon
  });
});

router.patch('/:pokemonID', (req, res) => {
  const { pokemonID } = req.params;
  const body = req.body;
  const pokemon = service.update(pokemonID, body)
  res.json({
    message: 'update',
    data: pokemon,
    pokemonID
  });
});

router.delete('/:pokemonID', (req, res) => {
  const { pokemonID } = req.params;
  const pokemon = service.delete(pokemonID)
  res.json({
    message: 'deleted',
    pokemonID,
    pokemon
  });
});


module.exports = router;
