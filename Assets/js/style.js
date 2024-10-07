// -------------------------------menu burger-----------------------------


// Sélection des éléments du burger et de la navigation
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

// Toggle du menu burger
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});




// ---------------------------------code bouton copier ---------------------------------------

function copyCode() {
    var codeElement = document.getElementById("code");
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand("copy");
        alert("Code copié !");
    } catch (err) {
        alert("La copie a échoué.");
    }

    window.getSelection().removeAllRanges();
}

//------------------ animation pour le code page java--------------------

const boxes = document.querySelectorAll('.item');
let animationActive = false;

function toggleAnimation() {
    animationActive = !animationActive;
    boxes.forEach((box, index) => {
        if (animationActive) {
            setTimeout(() => {
                box.style.transform = 'scale(1.5) rotate(45deg)';
            }, index * 500);
        } else {
            box.style.transform = 'scale(1) rotate(0deg)';
        }
    });
}


// ----------------------------bouton scrol page --------------------------------------

// Sélectionne le bouton
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Affiche le bouton lorsque l'utilisateur descend de 10px
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


// -------------------------- confirmation envoi formulaire--------------------------

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Masquer le formulaire et afficher le message de confirmation
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});





