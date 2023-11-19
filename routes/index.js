const express = require('express');

const pokemonRouter = require('./pokemones.router');
const pokedexRouter = require('./pokedex.router');
const usersRouter = require('./users.router');
const evolutionsRouter = require('./evolutions.router');
const preEvolutionsRouter = require('./preevolutions.router');
const locationsRouter = require('./locations.router');
const typeRouter = require('./type.router');
const typesRouter = require('./types.router');
/* Aquí se exportan todas las rutas que existan */


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/pokemones', pokemonRouter);
  router.use('/pokedex', pokedexRouter);
  router.use('/users', usersRouter);
  router.use('/evolutions', evolutionsRouter);
  router.use('/preevolutions', preEvolutionsRouter);
  router.use('/locations', locationsRouter);
  router.use('/type', typeRouter);
  router.use('/types', typesRouter);
  // app.use('usuarios', usuariosRouter)

}



module.exports = routerApi;
