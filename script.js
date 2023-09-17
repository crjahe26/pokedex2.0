// 1. Cambio de vistas
document.addEventListener('DOMContentLoaded', function () {
    const switchViewButton = document.getElementById('switchViewButton');
    const pokedexView = document.getElementById('pokedexView');
    const boxesView = document.getElementById('boxesView');
  
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
  });




// 2. Accionabilidad de los botónes
document.addEventListener('DOMContentLoaded', function () {
// Obtener los modales y los botones
const signInModal = document.getElementById('signInModal');
const logInModal = document.getElementById('logInModal');
const signInButton = document.getElementById('signInButton');
const logInButton = document.getElementById('logInButton');
const closeSignInModal = document.getElementById('closeSignInModal');
const closeLogInModal = document.getElementById('closeLogInModal');

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
});
  
  