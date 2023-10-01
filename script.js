// 1. Cambio de vistas
document.addEventListener('DOMContentLoaded', function () {
    const switchViewButton = document.getElementById('switchViewButton');
    const pokedexView = document.getElementById('pokedexView');
    const boxesView = document.getElementById('boxesView');
    const cssLink = document.getElementById('css-link');


    // Obtener los modales y los botones
    const signInModal = document.getElementById('signInModal');
    const logInModal = document.getElementById('logInModal');
    const signInButton = document.getElementById('signInButton');
    const logInButton = document.getElementById('logInButton');
    const closeSignInModal = document.getElementById('closeSignInModal');
    const closeLogInModal = document.getElementById('closeLogInModal');

    // Modal vista detalle
    const pokemonContainers = document.querySelectorAll('.pokemon-box');
    const pokemonDetailModal = document.getElementById('pokemonDetailModal');
    const closePokemonDetailModal = document.getElementById('closePokemonDetailModal');


    // Itera sobre cada Pokémon y agrega un evento para mostrar su detalle
    pokemonContainers.forEach(pokemonContainer => {
      pokemonContainer.addEventListener('click', function () {
        const pokemonId = this.getAttribute('data-pokemon-id');
        openPokemonDetailModal(pokemonId);  // Pasamos el pokemonId a la función
      });
    });

    // Evento para cerrar el modal de detalle del Pokémon
    closePokemonDetailModal.addEventListener('click', function () {
      pokemonDetailModal.style.display = 'none';
    });
  
    // Función para cambiar entre la vista de cajas y la vista tipo pokedex
    switchViewButton.addEventListener('click', function () {
      if (pokedexView.style.display === 'none' || pokedexView.style.display === '') {
        pokedexView.style.display = 'block';
        boxesView.style.display = 'none';
        switchViewButton.classList.add('button-active');
        cssLink.href = 'stylePokedex.css';
      } else {
        pokedexView.style.display = 'none';
        boxesView.style.display = 'block';
        switchViewButton.classList.remove('button-active');
        cssLink.href = 'styles.css';
      }
    });

    // Accionabilidad de los botónes
    // Mostrar modal de Sign In al hacer clic en el botón
    signInButton.addEventListener('click', function () {
      signInModal.style.display = 'block';
    });

    // Cerrar modal de Sign In al hacer clic en la "x"
    closeSignInModal.addEventListener('click', function () {
      signInModal.style.display = 'none';
    });

    // Mostrar modal de Log In al hacer clic en el botón
    logInButton.addEventListener('click', function () {
      logInModal.style.display = 'block';
    });

    // Cerrar modal de Log In al hacer clic en la "x"
    closeLogInModal.addEventListener('click', function () {
      logInModal.style.display = 'none';
    });

    // Cerrar modales al hacer clic fuera de ellos
    window.addEventListener('click', function (event) {
      if (event.target == signInModal) {
        signInModal.style.display = 'none';
      }
      if (event.target == logInModal) {
        logInModal.style.display = 'none';
      }
    });

    // Evitar que los clics dentro del modal lo cierren
    signInModal.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    logInModal.addEventListener('click', function (event) {
      event.stopPropagation();
    });






























    const currentPokemon = [
      {
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
        description: 'Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
        detailID: '026',
        detailType: 'Eléctrico',
        encounterLocation: 'Bosque Verde',

        preEvolutionID: '025',
        preEvolution: 'Pikachu',
        preEvolutionImageSrc: './src/images/pikachu.png',

        evolutionID: null,
        evolution: null,
        evolutionImageSrc: null
      }
    ];












    function openPokemonDetailModal(pokemonId) {
      // Encuentra el Pokémon con el ID proporcionado
      const foundPokemon = currentPokemon.find(pokemon => pokemon.pokemonID === pokemonId);
    
      if (!foundPokemon) {
        console.log('No se encontró ningún Pokémon con ese ID.');
        return;
      }
    
      // Obtén las referencias a los elementos del modal
      const pokemonDetailName = document.getElementById('pokemonDetailName');
      const preEvolution = document.getElementById('preEvolution');
      const preEvolutionImage = document.getElementById('preEvolutionImage');
      const evolution = document.getElementById('evolution');
      const evolutionImage = document.getElementById('evolutionImage');
      const pokemonID = document.getElementById('pokemonID');
      const pokemonImage = document.getElementById('pokemonImage');
      const pokemonDescription = document.getElementById('pokemonDescription');
      const pokemonDetailID = document.getElementById('pokemonDetailID');
      const pokemonDetailType = document.getElementById('pokemonDetailType');
      const pokemonEncounterLocation = document.getElementById('pokemonEncounterLocation');
    
      // Actualiza el contenido del modal con la información del Pokémon
      pokemonDetailName.innerText = foundPokemon.name;

      preEvolution.innerText = `Pre-evolución: ${foundPokemon.preEvolution} (ID: ${foundPokemon.preEvolutionID})`;
      preEvolutionImage.src = foundPokemon.preEvolutionImageSrc;
      evolution.innerText = `Evolución: ${foundPokemon.evolution} (ID: ${foundPokemon.evolutionID})`;
      evolutionImage.src = foundPokemon.evolutionImageSrc;
      pokemonID.innerText = `ID: ${foundPokemon.pokemonID}`;
      pokemonImage.src = foundPokemon.pokemonImageSrc;
      pokemonDescription.innerText = foundPokemon.description;
      pokemonDetailID.innerText = foundPokemon.detailID;
      pokemonDetailType.innerText = foundPokemon.detailType;
      pokemonEncounterLocation.innerText = foundPokemon.encounterLocation;
    
      // Mostrar o esconder información de pre-evolución
      if (foundPokemon.preEvolutionID && foundPokemon.preEvolution) {
        preEvolution.style.display = 'block';
        preEvolution.innerText = `Pre-evolución: ${foundPokemon.preEvolution} (ID: ${foundPokemon.preEvolutionID})`;
        preEvolutionImage.src = foundPokemon.preEvolutionImageSrc;
        preEvolutionImage.style.visibility = 'visible';
      } else {
        preEvolution.style.display = 'none';
        preEvolution.innerText = '';  // Elimina el contenido si está oculto
        preEvolutionImage.src = '';   // Elimina la imagen si está oculta
        preEvolutionImage.style.visibility = 'hidden';
        preEvolutionImage.alt = '';   // Elimina el atributo alt si está oculta
      }
      
      if (foundPokemon.evolutionID && foundPokemon.evolution) {
        evolution.style.display = 'block';
        evolution.innerText = `Evolución: ${foundPokemon.evolution} (ID: ${foundPokemon.evolutionID})`;
        evolutionImage.src = foundPokemon.evolutionImageSrc;
        evolutionImage.style.visibility = 'visible';
      } else {
        evolution.style.display = 'none';
        evolution.innerText = '';  // Elimina el contenido si está oculto
        evolutionImage.src = '';   // Elimina la imagen si está oculta
        evolutionImage.style.visibility = 'hidden';
        evolutionImage.alt = '';   // Elimina el atributo alt si está oculta
      }

      
      // Muestra el modal de detalle del Pokémon
      pokemonDetailModal.style.display = 'block';
    }
    










































































































































    /* function openPokemonDetailModal(pokemonId) {
      const pokemonBox = document.querySelector('.pokemon-box');
      const pokemonId = pokemonBox.getAttribute('data-pokemon-id');
      const pokemonDetailName = document.getElementById('pokemonDetailName');
      const preEvolution = document.getElementById('preEvolution');
      const preEvolutionImage = document.getElementById('preEvolutionImage');
      const evolution = document.getElementById('evolution');
      const evolutionImage = document.getElementById('evolutionImage');
      const pokemonID = document.getElementById('pokemonID');
      const pokemonImage = document.getElementById('pokemonImage');
      const pokemonDescription = document.getElementById('pokemonDescription');
      const pokemonDetailID = document.getElementById('pokemonDetailID');
      const pokemonDetailType = document.getElementById('pokemonDetailType');
      const pokemonEncounterLocation = document.getElementById('pokemonEncounterLocation');
  
      // Simula la información del Pokémon actual
      const currentPokemon = [
        {
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
          description: 'Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
          detailID: '026',
          detailType: 'Eléctrico',
          encounterLocation: 'Bosque Verde',

          preEvolutionID: '025',
          preEvolution: 'Pikachu',
          preEvolutionImageSrc: './src/images/pikachu.png',

          evolutionID: null,
          evolution: null,
          evolutionImageSrc: null
        }
      ];
  

      const pokemonIDToFind = pokemonId;  // El ID del Pokémon que quieres buscar

      let foundPokemon = currentPokemon.find(pokemon => pokemon.pokemonID === pokemonId);

      for (let i = 0; i < currentPokemon.length; i++) {
        if (currentPokemon[i].pokemonID === pokemonIDToFind) {
          foundPokemon = i;
          break;  // Si se encuentra el Pokémon, se puede salir del bucle
        }
      }

      if (foundPokemon) {
        console.log('Pokémon encontrado:', foundPokemon);
      } else {
        console.log('No se encontró ningún Pokémon con ese ID.');
      }



      // Actualiza el contenido del modal con la información del Pokémon
      pokemonDetailName.innerText = currentPokemon[foundPokemon].name;
      preEvolution.innerText = `Pre-evolución: ${currentPokemon[foundPokemon].preEvolution} (ID: ${currentPokemon[foundPokemon].preEvolutionID})`;
      preEvolutionImage.src = currentPokemon[foundPokemon].preEvolutionImageSrc;
      evolution.innerText = `Evolución: ${currentPokemon[foundPokemon].evolution} (ID: ${currentPokemon[foundPokemon].evolutionID})`;
      evolutionImage.src = currentPokemon[foundPokemon].evolutionImageSrc;
      pokemonID.innerText = `ID: ${currentPokemon[foundPokemon].pokemonID}`;
      pokemonImage.src = currentPokemon[foundPokemon].pokemonImageSrc;
      pokemonDescription.innerText = currentPokemon[foundPokemon].description;
      pokemonDetailID.innerText = currentPokemon[foundPokemon].detailID;
      pokemonDetailType.innerText = currentPokemon[foundPokemon].detailType;
      pokemonEncounterLocation.innerText = currentPokemon[foundPokemon].encounterLocation;
  
      // Muestra el modal de detalle del Pokémon
      pokemonDetailModal.style.display = 'block';
    } */

    /* function openPokemonDetailModal(name, preEvolutionImageSrc, preEvolutionID, pokemonImageSrc, evolution, evolutionImageSrc, pokemonID, pokemonImage, description, detailID, detailType, encounterLocation) {
      const pokemonDetailName = document.getElementById('pokemonDetailName');
      const preEvolution = document.getElementById('preEvolution');
      const preEvolutionImage = document.getElementById('preEvolutionImage');
      const evolutionElement = document.getElementById('evolution');
      const evolutionImage = document.getElementById('evolutionImage');
      const pokemonIDElement = document.getElementById('pokemonID');
      const pokemonImageElement = document.getElementById('pokemonImage');
      const pokemonDescription = document.getElementById('pokemonDescription');
      const pokemonDetailID = document.getElementById('pokemonDetailID');
      const pokemonDetailType = document.getElementById('pokemonDetailType');
      const pokemonEncounterLocation = document.getElementById('pokemonEncounterLocation');

      // Actualiza el contenido del modal con la información del Pokémon
      pokemonDetailName.innerText = name;
      preEvolution.innerText = `Pre-evolución: ${name} (ID: ${preEvolutionID})`;
      preEvolutionImage.src = preEvolutionImageSrc;
      
      if (evolution) {
        evolutionElement.innerText = `Evolución: ${evolution} (ID: ${pokemonID})`;
        evolutionImage.src = evolutionImageSrc;
      } else {
        evolutionElement.innerText = '';
        evolutionImage.src = '';
      }

      pokemonIDElement.innerText = `ID: ${pokemonID}`;
      pokemonImageElement.src = pokemonImageSrc;
      pokemonDescription.innerText = description;
      pokemonDetailID.innerText = `ID: ${detailID}`;
      pokemonDetailType.innerText = `Tipo: ${detailType}`;
      pokemonEncounterLocation.innerText = `Lugar de encuentro: ${encounterLocation}`;

      // Muestra el modal de detalle del Pokémon
      pokemonDetailModal.style.display = 'block';
    } */








  });



