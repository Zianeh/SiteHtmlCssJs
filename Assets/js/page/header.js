// Sélection des éléments du burger et de la navigation
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

// Toggle du menu burger
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


