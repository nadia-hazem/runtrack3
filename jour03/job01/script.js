// Jour03 - Job01 - button appear/desappear

// Créez une balise <button> en JQuery et sélectionnez-la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.”
// Ensuite créez un bouton qui servira à cacher tout l’élément html.

$(document).ready(function() {
    // On cache le texte
    $('#textContainer p').hide();
    // Variable qui va contenir l'état des boutons
    let buttonsShown = "hide"; 

    // fonction reset qui va permettre de réinitialiser les boutons
    function reset(){
        if(buttonsShown == "show"){
            // Si le bouton show est affiché, on le supprime
            $('#showTextBtn').remove();
            // On crée le bouton hide
            $('#textContainer').append('<button id="hideTextBtn">Cacher le texte</button>');
            // On lui ajoute un écouteur d'événement
            $('#hideTextBtn').click(function() {
                // On cache le texte
                $('#textContainer p').hide();
                // On supprime le bouton
                $('#hideTextBtn').remove();
                // On change la valeur de la variable
                buttonsShown = "hide";
                // On réinitialise
                reset();
            });
        } else {
            // Si le bouton hide est affiché, on le supprime
            $('#hideTextBtn').remove();
            // On crée le bouton show
            $('#textContainer').append('<button id="showTextBtn">Afficher le texte</button>');
            // On lui ajoute un écouteur d'événement
            $('#showTextBtn').click(function() {
                // On ajoute le texte
                $('#textContainer p').show();
                // On supprime le bouton
                $('#showTextBtn').remove();
                // On change la valeur de la variable
                buttonsShown = "show";
                // On réinitialise
                reset();
            });
        }
    }
    reset();
});


/* $('#showTextBtn').click(function() {
    $('#textContainer p').show();
    $('#showTextBtn').remove();
    reset();
}); */

/*  $('#textContainer p').hide();
    // On crée le bouton
    $('#textContainer').append('<button id="showTextBtn">Afficher le texte</button>');
    // On lui ajoute un écouteur d'événement
    $('#showTextBtn').click(function() {
    // On ajoute le texte
    $('#textContainer').append("<p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.</p>");
    // On supprime le bouton
    $('#showTextBtn').remove();
    });
    // On crée le bouton hide
    $('#textContainer').append('<button id="hideTextBtn">Cacher le texte</button>');
    // On lui ajoute un écouteur d'événement
    $('#hideTextBtn').click(function() {
    // On cache le texte
    $('#textContainer p').hide();
    // On supprime le bouton
    $('#hideTextBtn').remove();
    });
}); */


/* }); */
