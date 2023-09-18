// 1. Cambio de vistas
document.addEventListener('DOMContentLoaded', function () {
    const switchViewButton = document.getElementById('switchViewButton');
    const pokedexView = document.getElementById('pokedexView');
    const boxesView = document.getElementById('boxesView');

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
      } else {
        pokedexView.style.display = 'none';
        boxesView.style.display = 'block';
        switchViewButton.classList.remove('button-active');
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
      const pokemonID = document.getElementById('pokemonID');
      const pokemonImage = document.getElementById('pokemonImage');
      const pokemonDescription = document.getElementById('pokemonDescription');
      const pokemonDetailID = document.getElementById('pokemonDetailID');
      const pokemonDetailType = document.getElementById('pokemonDetailType');
      const pokemonEncounterLocation = document.getElementById('pokemonEncounterLocation');
  
      // Simula la información del Pokémon actual
      const currentPokemon = {
        name: 'Pikachu',
        preEvolution: 'Pichu',
        preEvolutionImageSrc: 'pichu.jpg',
        pokemonID: '025',
        pokemonImageSrc: 'pikachu.jpg',
        description: 'Este es un simulacro de la descripción del Pokémon.',
        detailID: '025',
        detailType: 'Eléctrico',
        encounterLocation: 'Bosque Verde'
      };
  
      // Actualiza el contenido del modal con la información del Pokémon
      pokemonDetailName.innerText = currentPokemon.name;
      preEvolution.innerText = `Pre-evolución: ${currentPokemon.preEvolution} (ID: ${currentPokemon.pokemonID})`;
      preEvolutionImage.src = currentPokemon.preEvolutionImageSrc;
      pokemonID.innerText = `ID: ${currentPokemon.pokemonID}`;
      pokemonImage.src = currentPokemon.pokemonImageSrc;
      pokemonDescription.innerText = currentPokemon.description;
      pokemonDetailID.innerText = currentPokemon.detailID;
      pokemonDetailType.innerText = currentPokemon.detailType;
      pokemonEncounterLocation.innerText = currentPokemon.encounterLocation;
  
      // Muestra el modal de detalle del Pokémon
      pokemonDetailModal.style.display = 'block';
    }








  });



