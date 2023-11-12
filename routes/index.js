const express = require('express');

const pokemonRouter = require('./pokemones.router');
const pokedexRouter = require('./pokedex.router');
/* Aquí se exportan todas las rutas que existan */


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/pokemones', pokemonRouter);
  router.use('/pokedex', pokedexRouter);
  // app.use('usuarios', usuariosRouter)

}



module.exports = routerApi;
