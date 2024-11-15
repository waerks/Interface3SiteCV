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

// SCROLL TRAVAUX //
document.querySelectorAll('.cardTravauxLien').forEach(card => {
    card.addEventListener('mouseover', () => {
        const container = document.querySelector('.divCards');
        
        // Calcul de la position de la carte par rapport au conteneur
        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Calcule le décalage nécessaire pour centrer la carte
        const offset = cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2);
        
        // Fait défiler le conteneur pour centrer la carte
        container.scrollBy({
            left: offset,
            behavior: 'smooth'  // Défilement en douceur
        });
    });
});

document.querySelectorAll('.cardTravauxLien').forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Retire la classe `cardTravauxLienActive` de l'ancienne carte active
        document.querySelector('.cardTravauxLienActive')?.classList.remove('cardTravauxLienActive');
        
        // Ajoute la classe `cardTravauxLienActive` à la carte cliquée
        card.classList.add('cardTravauxLienActive');
        
        // Applique la classe `cardTravauxLienNotActive` aux autres cartes
        document.querySelectorAll('.cardTravauxLien').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add('cardTravauxLienNotActive');
            } else {
                otherCard.classList.remove('cardTravauxLienNotActive');
            }
        });
    });
});

// FILTRE TRAVAUX //
document.querySelectorAll('.filtreBtn').forEach(button => {
    button.addEventListener('click', () => {
        // Récupère la catégorie du bouton cliqué
        const category = button.textContent.trim();

        // Récupère toutes les cartes
        const cards = document.querySelectorAll('.cardTravauxLien');

        // Supprime la classe `cardTravauxLienActive` de toutes les cartes
        cards.forEach(card => card.classList.remove('cardTravauxLienActive'));

        // Si "Tout afficher" est cliqué, montre toutes les cartes
        if (category === "Tout afficher") {
            cards.forEach(card => {
                card.style.display = 'flex'; // Affiche toutes les cartes
            });
        } else {
            // Filtre les cartes en fonction de la catégorie
            cards.forEach(card => {
                const categories = Array.from(card.querySelectorAll('.categorieBtn')).map(btn => btn.textContent.trim());
                if (categories.includes(category)) {
                    card.style.display = 'flex'; // Affiche la carte si elle correspond
                } else {
                    card.style.display = 'none'; // Masque la carte si elle ne correspond pas
                }
            });
        }
    });
});

// ACCORDEONS //
const accordeons = document.querySelectorAll('.cardAccordeon');

// Ajouter un écouteur d'événement de clic sur chaque card
accordeons.forEach(accordeon => {
    accordeon.addEventListener('click', function() {
        // Si l'élément est actuellement inactif
        if (accordeon.classList.contains('cardAccordeonNotActive')) {
            // Retirer la classe 'cardAccordeonNotActive' et ajouter 'cardAccordeonActive'
            accordeon.classList.remove('cardAccordeonNotActive');
            accordeon.classList.add('cardAccordeonActive');
        } else {
            // Si vous voulez permettre de fermer l'accordéon (facultatif), vous pouvez ajouter ce code :
            accordeon.classList.remove('cardAccordeonActive');
            accordeon.classList.add('cardAccordeonNotActive');
        }
    });
});