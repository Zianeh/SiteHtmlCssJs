document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Masquer le formulaire et afficher le message de confirmation
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});

// Sélectionne le bouton
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Affiche le bouton lorsque l'utilisateur descend de 100px
window.onscroll = function() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 10) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Lorsque l'utilisateur clique sur le bouton, remonte tout en haut
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Défilement fluide
    });
});
