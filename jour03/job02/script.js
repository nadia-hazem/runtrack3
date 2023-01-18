// Jour03 - Job02 - Ordonner 'arc-en-ciel' JQuery
///////////////////////////////////////////

// Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les mélanger puis les remettre en ordre.
// Le but de ce job sera dans un premier temps de créer une balise <button>. Cette balise servira à mélanger l’ensemble des images de l’arc-en-ciel.
// Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le bon ordre, en utilisant un ou plusieurs conteneurs.
// Une fois que les 6 images sont ordonnées, un message s’affiche en dessous :
// Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
// Sinon, le message “Vous avez perdu” s’affiche en rouge.


$(document).ready(function() {
    // Déclaration des variables
    let images = $("#rainbow-container img");
    let selectedImages = [];
    // Ajoute un écouteur d'événement au bouton
    $("#shuffle-button").click(function() {
    // Mélange aléatoirement les images en utilisant la méthode .sort()
        images.sort(function() {
        return 0.5 - Math.random();
        });
        // Remet les images dans le conteneur dans l'ordre mélangé
        images.appendTo("#rainbow-container");
    });
    // Ajoute un écouteur d'événement aux images
    $("#rainbow-container").on("click", "img", function() {
        // Ajoute l'image sélectionnée au tableau des images sélectionnées
        selectedImages.push(this);
        // Ajoute l'image sélectionnée au conteneur des images sélectionnées
        $(this).appendTo("#selected-container");
        
        let isSorted = true;
        // Boucle qui vérifie si les images sont dans le bon ordre
        for (let i = 0; i < selectedImages.length; i++) {
            // Si l'image n'est pas dans le bon ordre, on sort de la boucle
            if (selectedImages[i].id !== "image" + (i + 1)) {
                isSorted = false;
                break;
            }
        }
        // Affiche un message en fonction de si les images sont dans le bon ordre ou non
        if (isSorted) {
        $("#message").text("Vous avez gagné").css("color", "green");
        } else {
        $("#message").text("Vous avez perdu").css("color", "red");
        }
    });
});