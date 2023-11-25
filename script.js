// 1. Cambio de vistas

document.addEventListener('DOMContentLoaded', function () {
  const switchViewButton = document.getElementById('switchViewButton');
  const pokedexView = document.getElementById('pokedexView');
  const boxesView = document.getElementById('boxesView');
  const cssLink = document.getElementById('css-link');

  // Filtrado por nombre
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', searchPokemon);

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

  const pokemonContainer = document.getElementById('boxesViews');

  // Realizar la solicitud fetch para obtener todos los Pokémon
  fetch('http://localhost:3001/api/v1/pokemones')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Recorre los datos de los Pokémon y crea elementos para cada uno
      data.forEach(pokemon => {
        console.log(pokemon)
        const pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('pokemon-box');
        pokemonDiv.setAttribute('data-pokemon-id', pokemon.p_id); // Ajusta esto según la estructura de tu data

        const imageElement = document.createElement('img');
        imageElement.src = pokemon.p_imagesrc; // Reemplaza con la URL de la imagen del Pokémon
        imageElement.alt = pokemon.p_name;

        const nameElement = document.createElement('h3');
        nameElement.textContent = pokemon.p_name;

        const typeElement = document.createElement('p');
        typeElement.textContent = `Tipo: ${pokemon.p_type}`;

        // Agrega los elementos al contenedor del Pokémon
        pokemonDiv.appendChild(imageElement);
        pokemonDiv.appendChild(nameElement);
        pokemonDiv.appendChild(typeElement);

        // Agrega el contenedor del Pokémon al contenedor principal
        pokemonContainer.appendChild(pokemonDiv);
      });
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
    });






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

  // Inicio de sesion con el formulario
  const form = document.getElementById('logInForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtener valores de los campos de email y password
    const email = document.getElementById('emailLogIn').value;
    const password = document.getElementById('passwordLogIn').value;
    // Comparar con los datos en tu base de datos (simulando una comparación)
    // Aquí debes incluir tu lógica para comparar con los datos reales de la base de datos
    fetch(`http://localhost:3001/api/v1/users/login/${email}/${password}`, {
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Manejar la respuesta de la API
        if (data.user?.u_id) {
          localStorage.setItem('user', JSON.stringify(data.user));
          logInModal.style.display = 'none';
        } else {
          console.log('Credenciales incorrectas. Inténtalo de nuevo.');
        }
      })
      .catch(error => {
        // Manejar errores de red u otros errores
        console.error('There has been a problem with your fetch operation:', error);
      });


    // if (email === fakeEmail && password === fakePassword) {
    //   // Aquí puedes redirigir al usuario o realizar otras acciones si las credenciales son correctas
    //   console.log('¡Inicio de sesión exitoso!');
    // } else {
    //   // Acciones si las credenciales son incorrectas
    //   console.log('Credenciales incorrectas. Inténtalo de nuevo.');
    // }

    // Limpieza de campos después de la comparación (opcional)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

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
      preEvolutionImageSrc: null,

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
      preEvolutionImageSrc: null,

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
      preEvolutionImageSrc: null,

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











  function searchPokemon() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value.toLowerCase();

    fetch(`http://localhost:3001/api/v1/pokemones/name/${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const pokemonData = data;
        const pokemonContainer = document.getElementById('boxesViews');
        pokemonContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los pokémones

        pokemonData.pokemon.forEach(pokemon => {
          // Aplicar filtrado por tipo si se selecciona un tipo específico
          if (typeFilter === 'all' || pokemon.type.toLowerCase() === typeFilter) {
            const pokemonDiv = document.createElement('div');
            pokemonDiv.classList.add('pokemon-box');

            const nameElement = document.createElement('h3');
            nameElement.textContent = pokemon.p_name;

            const imageElement = document.createElement('img');
            imageElement.src = pokemon.p_imagesrc;

            pokemonDiv.appendChild(nameElement);
            pokemonDiv.appendChild(imageElement);

            pokemonContainer.appendChild(pokemonDiv);
          }
        });

        const visiblePokemonContainers = document.querySelectorAll('.pokemon-box.visible');
        pokemonContainer.style.justifyContent = visiblePokemonContainers.length > 0 ? 'center' : 'flex-start';
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
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
  submitNewPokemonButton.addEventListener('submit', function (event) {
    event.preventDefault();
    addPokemon(event);
  });





















  function createPokemonElement(pokemon) {
    const pokemonBox = document.createElement('div');
    pokemonBox.classList.add('pokemon-box');
    pokemonBox.setAttribute('data-pokemon-id', pokemon.p_id);

    const img = document.createElement('img');
    img.src = pokemon.p_imagesrc;
    img.alt = pokemon.p_name;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.p_name;

    const pType = document.createElement('p');
    pType.textContent = 'Tipo: ' + pokemon.detailType;

    // Añadir más elementos según sea necesario...

    // Agregar los elementos al contenedor de Pokémon
    pokemonBox.appendChild(img);
    pokemonBox.appendChild(h3);
    pokemonBox.appendChild(pType);

    // Agregar el contenedor de Pokémon al cuerpo del documento
    const pokemonContainer = document.getElementById('boxesViews');
    pokemonContainer.appendChild(pokemonBox);
    closeAddPokemonModal()
  }


  function addPokemon(event) {
    event.preventDefault();  // Evitar que la página se recargue al enviar el formulario
    const newPokemon = {};  // Crear un objeto vacío para almacenar la información del nuevo Pokémon
    // Obtener los valores del formulario
    const name = document.getElementById('pokemonName').value;
    const pokemonID = document.getElementById('pokemonId').value;
    const pokemonImageSrc = document.getElementById('pokemonImageInput').value;
    const pokemonDescriptions = document.getElementById('pokemonDescriptions').value;
    // Obtener más campos según sea necesario...

    // Llenar el objeto newPokemon con la información del formulario
    newPokemon.p_name = name;
    newPokemon.p_id = pokemonID;
    newPokemon.p_imagesrc = pokemonImageSrc;
    newPokemon.p_description = pokemonDescriptions;
    // Llenar más campos según sea necesario...

    // Agregar el nuevo Pokémon a currentPokemon
    fetch('http://localhost:3001/api/v1/pokemones/', {
      body: JSON.stringify(newPokemon),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then(data => {
        console.log('Nuevo Pokémon creado:', data);
        // Aquí podrías hacer algo con la respuesta si es necesario
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error);
      });
    currentPokemon.push(newPokemon);

    // Llamar a la función para mostrar el nuevo Pokémon
    createPokemonElement(newPokemon);

    // Limpiar el formulario
    document.getElementById('pokemonForm').reset();
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



