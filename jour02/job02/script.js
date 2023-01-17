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

    function showhide() {
        // Si l'article est caché, le montrer et changer le texte du bouton
        if (article.style.display === "none") {
            article.style.display = "block";
            button.innerHTML = "Cacher citation";
            console.log("L'important n'est pas la chute, mais l'atterrissage.");
        } else {
            article.style.display = "none";
            button.innerHTML = "Afficher citation";
            console.clear();
        }
    }
    button.addEventListener("click", showhide);
});
