// Jour02 - Job04 - Keylogger
/////////////////////////////

// Créez un <textarea> dont l’id est “keylogger”.
// Chaque fois que l’utilisateur tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea (même si le focus en cours n’est pas le textarea).
// Si le focus en cours est dans le textarea, la lettre doit être ajoutée deux fois.

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("keydown", function(event) {
        // Déclaration de la variable key qui prend la valeur de la touche pressée
        let key = event.key;
        // Si la touche pressée est comprise entre a et z
        if (key >= 'a' && key <= 'z') {
        // Déclaration de la variable textarea qui prend la valeur de l'élément textarea
        let textarea = document.getElementById("keylogger");
        // Si l'élément actif est le textarea
        if (document.activeElement === textarea) {
            // Ajout de la lettre deux fois
            textarea.value += key;
        }
        // Ajout de la lettre une fois
        textarea.value += key;
        // Empêche le comportement par défaut de la touche pressée
        event.preventDefault();
        }
    });

});