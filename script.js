// 1. Cambio de vistas
document.addEventListener('DOMContentLoaded', function () {
    const switchViewButton = document.getElementById('switchViewButton');
    const pokedexView = document.getElementById('pokedexView');
    const boxesView = document.getElementById('boxesView');
    const cssLink = document.getElementById('css-link');
    
    // Filtrado por nombre vista cajas
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchPokemon);

    // Filtrado por nombre vista pokedex
    const searchInputPokedex = document.getElementById('buscar-field');
    searchInputPokedex.addEventListener('input', searchPokemonPokedex);
    
    // Filtrado por tipo
    const typeFilter = document.getElementById('typeFilter');
    typeFilter.addEventListener('change', searchPokemon);


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



    

























    // Listado de pokemon disponibles
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
      }
    ];



    







    // Modal de vista detallada
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


      // Funcionalidad de la vista pokedex para cambiar y moverse entre pokemon con la cruz
      const previousButton = document.querySelector(".cross-left");
      const nextButton = document.querySelector(".cross-right");
      const upButton = document.querySelector(".cross-top");
      const downButton = document.querySelector(".cross-bottom");
      // Add event listeners to the "Previous" and "Next" buttons.
      upButton.addEventListener("click", () => {
        nextPokemon();
      });
      downButton.addEventListener("click", () => {
        previousPokemon();
      });

      previousButton.addEventListener("click", () => {
          previousPokemon();
      });

      nextButton.addEventListener("click", () => {
          nextPokemon();
      });


      let currentPokemonIndex = 0

      function nextPokemon() {
        currentPokemonIndex = currentPokemonIndex + 1
        if (currentPokemonIndex >= currentPokemon.length) {
          currentPokemonIndex = 0
        }
        const pokemon = currentPokemon[currentPokemonIndex];
        displayPokemon(pokemon)
      }

      function displayPokemon(pokemon) {
        const Pname = document.getElementById('pokemon-name');
        const PNumber = document.getElementById('pokemon-number');
        const PImage = document.getElementById('screen-left-image');
        const PDesct = document.getElementById('pokemon-desc');
        const PType = document.getElementById('pokemon-type');
        PDesct.textContent = pokemon.description;
        PImage.src = pokemon.pokemonImageSrc;
        PNumber.textContent = pokemon.pokemonID;
        Pname.textContent = pokemon.name;
        PType.textContent = pokemon.detailType;
        }
      function previousPokemon() {
        currentPokemonIndex = currentPokemonIndex - 1
        if (currentPokemonIndex < 0) {
          currentPokemonIndex = currentPokemon.length -1
        }
        const pokemon = currentPokemon[currentPokemonIndex];
        displayPokemon(pokemon)
      }

        









    //Funcion para buscar pokemon en la vista de cajas por nombre y tipo
    function searchPokemon() {
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput.value.toLowerCase();
      const typeFilter = document.getElementById('typeFilter').value;
    
      const pokemonContainers = document.querySelectorAll('.pokemon-box');
      pokemonContainers.forEach(pokemonContainer => {
        const pokemonId = pokemonContainer.getAttribute('data-pokemon-id');
        const foundPokemon = currentPokemon.find(pokemon => pokemon.pokemonID === pokemonId);
    
        // Comprueba si el nombre y el tipo coinciden con los filtros
        const nameMatches = foundPokemon && foundPokemon.name.toLowerCase().includes(searchTerm);
        const typeMatches = typeFilter === 'all' || (foundPokemon && foundPokemon.detailType.includes(typeFilter));
    
        if (nameMatches && typeMatches) {
          pokemonContainer.classList.add('visible');
          pokemonContainer.classList.remove('hidden');
          pokemonContainer.classList.add('centered-box');
        } else {
          pokemonContainer.classList.add('hidden');
          pokemonContainer.classList.remove('visible');
          pokemonContainer.classList.remove('centered-box');
        }
      });
    
      // Obtén las cajas visibles y centra su contenedor
      const visiblePokemonContainers = document.querySelectorAll('.pokemon-box.visible');
      const pokemonContainer = document.getElementById('boxesView');
      pokemonContainer.style.justifyContent = visiblePokemonContainers.length > 0 ? 'center' : 'flex-start';
    }

    //Funcion para buscar pokemon en la vista de pokedex por nombre
    function searchPokemonPokedex() {
      const searchInputPokedex = document.getElementById('buscar-field');

      function searchAndDisplayPokemon() {
        const searchTermPokedex = searchInputPokedex.value.toLowerCase();
        
        // Iterar sobre la lista de pokémon
        for (const pokemon of currentPokemon) {
          // Convertir el nombre del Pokémon a minúsculas para hacer la comparación
          const pokemonName = pokemon.name.toLowerCase();
          
          // Verificar si el término de búsqueda está incluido en el nombre del Pokémon
          if (pokemonName.includes(searchTermPokedex)) {
            // Si lo encuentra, muestra el Pokémon y detiene la iteración
            displayPokemon(pokemon);
            return;
          }
        }
        
        // Si no se encuentra ningún Pokémon, muestra un mensaje de error
        console.log('No se encontró ningún Pokémon con ese nombre.');
      }

      // Escuchar el evento de pulsación de tecla en el campo de búsqueda
      searchInputPokedex.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          searchAndDisplayPokemon();
        }
      });

    }





  // Función para abrir el modal para agregar un nuevo Pokémon
  function openAddPokemonModal() {
    const addPokemonModal = document.getElementById('addPokemonModal');
    addPokemonModal.style.display = 'block';
  }

  // Función para cerrar el modal para agregar un nuevo Pokémon
  function closeAddPokemonModal() {
    const addPokemonModal = document.getElementById('addPokemonModal');
    addPokemonModal.style.display = 'none';
  }

  // Evento para abrir el modal al hacer clic en el botón flotante
  const addPokemonButton = document.getElementById('addPokemonButton');
  addPokemonButton.addEventListener('click', openAddPokemonModal);

  // Evento para cerrar el modal al hacer clic en la "x"
  const closeAddPokemonModalButton = document.getElementById('closeAddPokemonModal');
  closeAddPokemonModalButton.addEventListener('click', closeAddPokemonModal);

  // Evento para cerrar el modal al hacer clic fuera de él
  window.addEventListener('click', function (event) {
    const addPokemonModal = document.getElementById('addPokemonModal');
    if (event.target === addPokemonModal) {
      addPokemonModal.style.display = 'none';
    }
  });

  // Evitar que los clics dentro del modal lo cierren
  const addPokemonModalContent = document.querySelector('#addPokemonModal .modal-content');
  addPokemonModalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Evento para agregar un nuevo Pokémon
  const submitNewPokemonButton = document.getElementById('addPokemonForm');
  document.getElementById('addPokemonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addPokemon(event);
  });
    const newPokemon = {
      name: '',
      pokemonID: '',
      pokemonImageSrc: '',
      description: '',
      detailID: '',
      detailType: '',
      encounterLocation: '',
      preEvolutionID: '',
      preEvolution: '',
      preEvolutionImageSrc: '',
      evolutionID: '',
      evolution: '',
      evolutionImageSrc: ''
    };
    

    // Función para crear nuevos elementos (pokemon) en el dom
    function createPokemonElement(pokemon) {
      const pokemonBox = document.createElement('div');
      pokemonBox.classList.add('pokemon-box');
      pokemonBox.setAttribute('data-pokemon-id', pokemon.pokemonID);
    
      const img = document.createElement('img');
      img.src = pokemon.pokemonImageSrc;
      img.alt = pokemon.name;
    
      const h3 = document.createElement('h3');
      h3.textContent = pokemon.name;
    
      const pType = document.createElement('p');
      pType.textContent = 'Tipo: ' + pokemon.detailType;

    
      // Agregar los elementos al contenedor de Pokémon
      pokemonBox.appendChild(img);
      pokemonBox.appendChild(h3);
      pokemonBox.appendChild(pType);
    
      // Agregar el contenedor de Pokémon al cuerpo del documento
      const pokemonContainer = document.getElementById('boxesViews');
      pokemonContainer.appendChild(pokemonBox);

      
      closeAddPokemonModal()
    }
  
    // Mapeo de atributos para el nuevo pokemon a partir de la información del modal
    function addPokemon(event) {
      event.preventDefault();  // Evitar que la página se recargue al enviar el formulario
    
      // Obtener los valores del formulario
      const name = document.getElementById('pokemonName').value;
      const pokemonID = document.getElementById('pokemonId').value;
      const pokemonImageSrc = document.getElementById('addPokemonImage').value;
      const pokemonDesc = document.getElementById('pokemonDescriptions').value;
      const pokemonType = document.getElementById('pokemonTypes').value;
      const pokemonPlace = document.getElementById('encounterLocation').value;
      const preEvolutionID = document.getElementById('preEvolutionID').value;
      const preEvolutionName = document.getElementById('preEvolutionName').value;
      const preEvolutionImage = document.getElementById('preEvolutionImages').value;
      const evolutionID = document.getElementById('evolutionID').value;
      const evolutionName = document.getElementById('evolutionName').value;
      const evolutionImage = document.getElementById('evolutionImages').value;
    
      // Llenar el objeto newPokemon con la información del formulario
      newPokemon.name = name;
      newPokemon.pokemonID = pokemonID;
      newPokemon.pokemonImageSrc = pokemonImageSrc;
      newPokemon.description = pokemonDesc;
      newPokemon.detailType = pokemonType;
      newPokemon.encounterLocation = pokemonPlace;
      newPokemon.preEvolutionID = preEvolutionID;
      newPokemon.preEvolution = preEvolutionName;
      newPokemon.preEvolutionImageSrc = preEvolutionImage;
      newPokemon.evolutionID = evolutionID;
      newPokemon.evolution = evolutionName;
      newPokemon.evolutionImageSrc = evolutionImage;
      
      // Agregar el nuevo Pokémon a currentPokemon
      currentPokemon.push(newPokemon);
    
      // Llamar a la función para mostrar el nuevo Pokémon
      createPokemonElement(newPokemon);


      const pokemonContainers = document.querySelectorAll('.pokemon-box');
    
      pokemonContainers.forEach(pokemonContainer => {
        pokemonContainer.addEventListener('click', function () {
          const pokemonId = this.getAttribute('data-pokemon-id');
          openPokemonDetailModal(pokemonId);  // Pasamos el pokemonId a la función
        });
      });
    
      // Limpiar el formulario
      document.getElementById('addPokemonForm').reset();
    }
  







  // Función para abrir el modal para agregar un nuevo Pokémon
  function openAddPokemonModal() {
    const addPokemonModal = document.getElementById('addPokemonModal');
    addPokemonModal.style.display = 'block';
  }

  // Función para cerrar el modal para agregar un nuevo Pokémon
  function closeAddPokemonModal() {
    const addPokemonModal = document.getElementById('addPokemonModal');
    addPokemonModal.style.display = 'none';
  }

  // Evento para abrir el modal al hacer clic en el botón flotante
  const addPokemonButtonPokedex = document.getElementById('addPokemonButtonPokedex');
  addPokemonButtonPokedex.addEventListener('click', openAddPokemonModal);

  // Evento para cerrar el modal al hacer clic en la "x"
  const closeAddPokemonModalButtonpokedex = document.getElementById('closeAddPokemonModal');
  closeAddPokemonModalButtonpokedex.addEventListener('click', closeAddPokemonModal);

  // Evento para cerrar el modal al hacer clic fuera de él
  window.addEventListener('click', function (event) {
    const addPokemonModal = document.getElementById('addPokemonModal');
    if (event.target === addPokemonModal) {
      addPokemonModal.style.display = 'none';
    }
  });

  // Evitar que los clics dentro del modal lo cierren
  const addPokemonModalContentpokedex = document.querySelector('#addPokemonModal .modal-content');
  addPokemonModalContentpokedex.addEventListener('click', function (event) {
    event.stopPropagation();
  });


});



