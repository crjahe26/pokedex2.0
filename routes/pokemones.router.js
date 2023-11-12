const express = require('express');

const router = express.Router();



const listadoPokemones = [{
  name: 'Pikachu',
  pokemonID: '025',
  pokemonImageSrc: './src/images/pikachu.png',
  description: 'Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
  detailID: '025',
  detailType: 'Eléctrico',
  encounterLocation: 'Bosque Verde',

  preEvolutionID: '172',
  preEvolution: 'Pichu',
  preEvolutionImageSrc: './src/images/pichu.png',

  evolutionID: '026',
  evolution: 'Raichu',
  evolutionImageSrc: './src/images/raichu.png'
},
{
  name: 'Pichu',
  pokemonID: '172',
  pokemonImageSrc: './src/images/pichu.png',
  description: 'A pesar de su pequeño tamaño, ataca incluso a los humanos, algo que le sorprende hasta a él.',
  detailID: '172',
  detailType: 'Eléctrico',
  encounterLocation: 'Bosque Verde',

  preEvolutionID: null,
  preEvolution: null,
  preEvolutionImageSrc: null,

  evolutionID: '025',
  evolution: 'Pikachu',
  evolutionImageSrc: './src/images/pikachu.png'
},
{
  name: 'Raichu',
  pokemonID: '026',
  pokemonImageSrc: './src/images/raichu.png',
  description: 'Suelta descargas eléctricas de hasta 100.000 voltios, con lo que es capaz de derribar al mayor de los Pokémon.',
  detailID: '026',
  detailType: 'Eléctrico',
  encounterLocation: 'Bosque Verde',

  preEvolutionID: '025',
  preEvolution: 'Pikachu',
  preEvolutionImageSrc: './src/images/pikachu.png',

  evolutionID: null,
  evolution: null,
  evolutionImageSrc: null
},
{
  name: 'Bulbasaur',
  pokemonID: '001',
  pokemonImageSrc: './src/images/bulbasaur.png',
  description: 'Este Pokémon nace con una semilla en el lomo. Con el tiempo, la semilla brota.',
  detailID: '001',
  detailType: ['Planta', 'Veneno'],
  encounterLocation: 'Torre Regocijo',

  preEvolutionID: null,
  preEvolution: null,
  preEvolutionImageSrc:  null,

  evolutionID: '002',
  evolution: 'Ivysaur',
  evolutionImageSrc: './src/images/ivysaur.png'
},
{
  name: 'Ivysaur',
  pokemonID: '002',
  pokemonImageSrc: './src/images/ivysaur.png',
  description: 'Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.',
  detailID: '002',
  detailType: ['Planta', 'Veneno'],
  encounterLocation: 'Cueva Occidental',

  preEvolutionID: '001',
  preEvolution: 'Bulbasaur',
  preEvolutionImageSrc: './src/images/bulbasaur.png',

  evolutionID: '003',
  evolution: 'Venusaur',
  evolutionImageSrc: './src/images/venusaur.png'
},
{
  name: 'Venusaur',
  pokemonID: '003',
  pokemonImageSrc: './src/images/venusaur.png',
  description: 'La flor que tiene en el lomo libera un delicado aroma. En combate, este aroma tiene un efecto relajante.',
  detailID: '003',
  detailType: ['Planta', 'Veneno'],
  encounterLocation: 'Cueva Occidental',

  preEvolutionID: '002',
  preEvolution: 'Ivysaur',
  preEvolutionImageSrc: './src/images/ivysaur.png',

  evolutionID: null,
  evolution: null,
  evolutionImageSrc: null
},
{
  name: 'Charmander',
  pokemonID: '004',
  pokemonImageSrc: './src/images/charmander.png',
  description: 'Este Pokémon nace con una llama en la punta de la cola. Si la llama se apagara, el Pokémon se debilitaría.',
  detailID: '004',
  detailType: 'Fuego',
  encounterLocation: 'Campo de Fuego',

  preEvolutionID: null,
  preEvolution: null,
  preEvolutionImageSrc:  null,

  evolutionID: '005',
  evolution: 'Charmeleon',
  evolutionImageSrc: './src/images/charmeleon.png'
},
{
  name: 'Charmeleon',
  pokemonID: '005',
  pokemonImageSrc: './src/images/charmeleon.png',
  description: 'Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.',
  detailID: '005',
  detailType: 'Fuego',
  encounterLocation: 'Campo de Fuego',

  preEvolutionID: '004',
  preEvolution: 'Charmander',
  preEvolutionImageSrc: './src/images/charmander.png',

  evolutionID: '006',
  evolution: 'Charizard',
  evolutionImageSrc: './src/images/charizard.png'
},
{
  name: 'Charizard',
  pokemonID: '006',
  pokemonImageSrc: './src/images/charizard.png',
  description: 'La flor que tiene en el lomo libera un delicado aroma. En combate, este aroma tiene un efecto relajante.',
  detailID: '006',
  detailType: ['Fuego', 'Volador'],
  encounterLocation: 'Cueva Occidental',

  preEvolutionID: '005',
  preEvolution: 'Charmeleon',
  preEvolutionImageSrc: './src/images/charmeleon.png',

  evolutionID: null,
  evolution: null,
  evolutionImageSrc: null
},
{
  name: 'Squirtle',
  pokemonID: '007',
  pokemonImageSrc: './src/images/squirtle.png',
  description: 'Cuando se esconde en el caparazón, dispara agua a una presión increíble.',
  detailID: '007',
  detailType: 'Agua',
  encounterLocation: 'Estanque Cascada',

  preEvolutionID: null,
  preEvolution: null,
  preEvolutionImageSrc:  null,

  evolutionID: '008',
  evolution: 'Wartortle',
  evolutionImageSrc: './src/images/wartortle.png'
},
{
  name: 'Wartortle',
  pokemonID: '008',
  pokemonImageSrc: './src/images/wartortle.png',
  description: 'Es el Pokémon que se suele tener como mascota. La cola tan larga y peluda que posee simboliza lo longevo que es.',
  detailID: '008',
  detailType: 'Agua',
  encounterLocation: 'Campo Ventoso',

  preEvolutionID: '007',
  preEvolution: 'Squirtle',
  preEvolutionImageSrc: './src/images/squirtle.png',

  evolutionID: '009',
  evolution: 'Blastoise',
  evolutionImageSrc: './src/images/blastoise.png'
},
{
  name: 'Blastoise',
  pokemonID: '009',
  pokemonImageSrc: './src/images/blastoise.png',
  description: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
  detailID: '009',
  detailType: 'Agua',
  encounterLocation: 'Cueva Occidental',

  preEvolutionID: '008',
  preEvolution: 'Wartortle',
  preEvolutionImageSrc: './src/images/wartortle.png',

  evolutionID: null,
  evolution: null,
  evolutionImageSrc: null
}]


// Con el siguiente endpoint podemos filtrar por nombre
// Ejemplo: /pokemones/?name=Pikachu
// Traerá la información dentro de pkms
router.get('/', (req, res) => {
  const { name } = req.query;
  const pkms = [];
  for(let index = 0; index < listadoPokemones.length; index++) {
    if ( listadoPokemones[index].name.toLowerCase().includes(name.toLowerCase()) ) { // Otra opción es que haga el match completo así: name.toLowerCase() == listadoPokemones[index].name.toLowerCase(), pero me gustó más con el includes XD
      pkms.push({
        name: listadoPokemones[index].name,
        pokemonID: listadoPokemones[index].pokemonID,
        pokemonImageSrc: listadoPokemones[index].pokemonImageSrc,
        description: listadoPokemones[index].description,
        detailID: listadoPokemones[index].detailID,
        detailType: listadoPokemones[index].detailType,
        encounterLocation: listadoPokemones[index].encounterLocation,

        preEvolutionID: listadoPokemones[index].preEvolutionID,
        preEvolution: listadoPokemones[index].preEvolution,
        preEvolutionImageSrc: listadoPokemones[index].preEvolutionImageSrc,

        evolutionID: listadoPokemones[index].evolutionID,
        evolution: listadoPokemones[index].evolution,
        evolutionImageSrc: listadoPokemones[index].evolutionImageSrc
      })
    }
  }
  if (pkms.lenght != 0 && name != '' && pkms[0] != null) {res.status(202).json({pkms})}
  else if (name == '')  {res.status(400).send('Busquedad vacía')}
  else {res.status(404).send('No se encontró ningún pokemon con ese nombre')}
})


router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:name', (req, res) => {
  const { name } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    name
  });
});

router.delete('/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: 'deleted',
    name
  });
});


module.exports = router;
