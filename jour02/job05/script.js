// Jour02 - Job05 - Dégradé de couleurs au scroll
// //////////////////////////////////////////////

// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas de votre fenêtre. De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en fonction du pourcentage de scrolling.

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {

    function scroll() {
        // récupération de la position du scroll
        let scroll = window.scrollY;
        // récupération de la hauteur du body
        let height = document.body.offsetHeight - window.innerHeight;
        // calcul du pourcentage de scroll
        let pourcentage = scroll / height * 100;
        // modification de la couleur du footer
        document.querySelector("footer").style.backgroundColor = "hsl(0, 100%, " + pourcentage + "%)";
        
    }
    // écoute de l'événement scroll
    window.addEventListener("scroll", scroll);
});