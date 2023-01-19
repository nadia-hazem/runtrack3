$(document).ready(function() {
    // On récupère les images
    let images = $("#rainbowContainer img");
    let selectedImages = [];
    let correctOrder = ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6"];

    function reset() {
        images.appendTo("#rainbowContainer");
        $("#selectedContainer").empty();
        selectedImages = [];
        $("#message").text("");
    }
    // On mélange les images
    $("#shuffleBtn").click(function() {
        images.sort(function() {
            return 0.5 - Math.random();
        });
        images.appendTo("#rainbowContainer");
    });
    // On ajoute les images sélectionnées dans le conteneur
    $("#rainbowContainer").on("click", "img", function() {
        // On récupère le nom de l'image
        let selectedImage = this.src.split("/").pop().split(".")[0];
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
