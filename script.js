// Obtenir tous les éléments de l'image de la galerie
var images = document.querySelectorAll('.gallery-item img');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Variables pour la navigation
var currentIndex = 0;
var currentImage = null;

// Ajouter un événement "click" à chaque image pour ouvrir le modal
images.forEach(function(img, index) {
    img.onclick = function() {
        currentIndex = index;  // Mémoriser l'index de l'image actuelle
        currentImage = this;
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Lorsque l'utilisateur clique sur la croix, fermer le modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

// Fonction pour afficher l'image précédente
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // Si à la première, revenir à la dernière
    currentImage = images[currentIndex];
    modalImg.src = currentImage.src;
    captionText.innerHTML = currentImage.alt;
}

// Fonction pour afficher l'image suivante
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;  // Si à la dernière, revenir à la première
    currentImage = images[currentIndex];
    modalImg.src = currentImage.src;
    captionText.innerHTML = currentImage.alt;
}

// Ajouter les événements pour les boutons précédent et suivant
document.querySelector('.prev').onclick = showPrevImage;
document.querySelector('.next').onclick = showNextImage;
