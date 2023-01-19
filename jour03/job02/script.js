// Jour03 - Job02 - JQuery sort game 'Rainbow'
//////////////////////////////////////////////

// Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les mélanger puis les remettre en ordre.
// Le but de ce job sera dans un premier temps de créer une balise <button>. Cette balise servira à mélanger l’ensemble des images de l’arc-en-ciel.
// Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le bon ordre, en utilisant un ou plusieurs conteneurs.
// Une fois que les 6 images sont ordonnées, un message s’affiche en dessous :
// Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
// Sinon, le message “Vous avez perdu” s’affiche en rouge.

$(document).ready(function() {

    // CSS
    $(document).ready(function() {
        // styles css
        $("#selectedContainer").css({
            "min-height": "300px"
        });
        $("#rainbowContainer, #selectedContainer").css({
            "display": "flex",
            "flex": 1,
            "overflow": "hidden",
            "border": "1px solid black",
            "margin": "2em",
            "max-width": "45%",
            "justify-content": "center",
            "margin": "auto",
            "text-align": "center"
        });
        $("img").css({
            "width": "100px",
            "height": "auto",
            "margin": "1px",
            "cursor": "pointer"
        });
        $("button").css({
            "margin": "1rem auto",
            "width": "120px",
            "height": "50px"
        });
        $(".message").css({
            "margin": "2em"
        });
    });
    
    

    // On récupère les images
    let images = $("#rainbowContainer img");
    // On crée un tableau pour stocker les images sélectionnées
    let selectedImages = [];
    // On indique l'ordre correct des images
    let correctOrder = ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6"];
    let isOrderCorrect = true;

    function reset() {
        // On remet les images dans le conteneur
        images.appendTo("#rainbowContainer");
        // On vide le conteneur des images sélectionnées
        $("#selectedContainer").empty();
        // On vide le tableau des images sélectionnées
        selectedImages = [];
        // On vide le message
        $("#message").empty();
    }
    // On mélange les images
    $("#shuffleBtn").click(function() {
        // On reset le message
        $("#message").empty();
        // On mélange les images avec 'sort'
        images.sort(function() {
            return 0.5 - Math.random();
        });
        // On ajoute les images dans le conteneur
        images.appendTo("#rainbowContainer");
    });
    // On ajoute un écouteur d'événement sur le conteneur des images
    $("#rainbowContainer").on("click", "img", function() {
        // On récupère le nom de l'image
        let selectedImage = this.id;
        // On ajoute l'image dans le tableau
        selectedImages.push(selectedImage);
        $(this).appendTo("#selectedContainer");
        // Si l'ordre est correct, on affiche un message
        if (selectedImages.length === correctOrder.length) {
            let isOrderCorrect = true;
            for (let i = 0; i < selectedImages.length; i++) {
                // Si l'ordre est incorrect, on sort de la boucle
                if (selectedImages[i] !== correctOrder[i]) {
                    isOrderCorrect = false;
                    break;
                }
            }
            if (isOrderCorrect) {
                $("#message").text("Vous avez gagné").css("color", "green");
            } else {
                $("#message").text("Vous avez perdu").css("color", "red");
            }
            selectedImages = [];
        }
    });

    // Add reset button
    $("#resetBtn").click(function() {
        reset();
    });
});
