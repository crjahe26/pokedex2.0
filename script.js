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
        openPokemonDetailModal();
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





    function openPokemonDetailModal() {
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
  
      // Actualiza el contenido del modal con la información del Pokémon
      pokemonDetailName.innerText = currentPokemon[0].name;
      preEvolution.innerText = `Pre-evolución: ${currentPokemon[0].preEvolution} (ID: ${currentPokemon[0].preEvolutionID})`;
      preEvolutionImage.src = currentPokemon[0].preEvolutionImageSrc;
      evolution.innerText = `Evolución: ${currentPokemon[0].evolution} (ID: ${currentPokemon[0].evolutionID})`;
      evolutionImage.src = currentPokemon[0].evolutionImageSrc;
      pokemonID.innerText = `ID: ${currentPokemon[0].pokemonID}`;
      pokemonImage.src = currentPokemon[0].pokemonImageSrc;
      pokemonDescription.innerText = currentPokemon[0].description;
      pokemonDetailID.innerText = currentPokemon[0].detailID;
      pokemonDetailType.innerText = currentPokemon[0].detailType;
      pokemonEncounterLocation.innerText = currentPokemon[0].encounterLocation;
  
      // Muestra el modal de detalle del Pokémon
      pokemonDetailModal.style.display = 'block';
    }

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



