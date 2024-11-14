// MENU RESPONSIVE //
const minWidth = 768;

const divOne = document.getElementById('divOne');
const divTwo = document.getElementById('divTwo');

function crossResponsive() {
    const crossImg = document.querySelector("#cross img");

    if (window.innerWidth <= minWidth) {
        // Basculer l'affichage seulement pour les écrans de 768px ou moins

        if (divOne.style.display === "none" && divTwo.style.display === "none") {
            divOne.style.display = "flex";
            divTwo.style.display = "flex";
            crossImg.style.transform = "rotate(0deg)";
        } else {
            divOne.style.display = "none";
            divTwo.style.display = "none";
            crossImg.style.transform = "rotate(45deg)";
        }
    }
}

// Fonction pour définir l'affichage au chargement et au redimensionnement
function adjustMenuDisplay() {
    const cross = document.querySelector(".cross");
    const navBtns = document.querySelectorAll(".navBtn");

    if (window.innerWidth > minWidth) {
        // Afficher les éléments en "flex" si la largeur de la fenêtre est au-delà de
        // 768px
        divOne.style.display = "flex";
        divTwo.style.display = "flex";
        cross.style.display = "none";

        navBtns.forEach(btn => btn.classList.remove("navResponsive"));
    } else {
        // Masquer les éléments en dessous de 768px, jusqu'à ce qu'ils soient affichés
        // via toggleMenu
        divOne.style.display = "none";
        divTwo.style.display = "none";
        cross.style.display = "flex";

        navBtns.forEach(btn => {
            if (!btn.classList.contains("navResponsive")) {
                btn.classList.add("navResponsive");
            }
        });
    }
}

// Appliquer l'ajustement du menu au chargement de la page et au redimensionnement
window.onload = adjustMenuDisplay;
window.onresize = adjustMenuDisplay;