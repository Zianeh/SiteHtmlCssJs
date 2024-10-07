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
