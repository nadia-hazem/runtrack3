// Jour02 - Job02 - Afficher/Masquer un élément
///////////////////////////////////////////////

// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté au contenu de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.

/* console.log("JavaScript is running"); */

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments du DOM par leur ID
    let button = document.getElementById("button");
    let article = document.getElementById("citation");

    let buttonState = 0;

    function showhide() {
        if (buttonState % 2 === 0) {
            article.style.display = "block";
            button.innerHTML = "Cacher citation";
            button.classList.remove("active");
            console.log("L'important n'est pas la chute, mais l'atterrissage.");
        } else {
            article.style.display = "none";
            button.innerHTML = "Afficher citation";
            button.classList.add("active");
            console.log(" ");
        }
        buttonState++;
    }
    // Ajoute un écouteur d'événement au clic sur le bouton
    button.addEventListener("click", showhide);
});