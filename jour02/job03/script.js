// Jour02 - Job03 - Compteur
///////////////////////////////////////////////

// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”. Ce contenu doit évoluer proportionnellement au nombre d'événements click reçu par le bouton
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre html.
// La fonction permettant d’effectuer la modification doit s'appeler “addone()”.

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {

    // Récupérer les éléments du DOM par leur ID
    let button = document.getElementById("button");
    let compteur = document.getElementById("compteur");
    // Initialiser le compteur à 0
    compteur.innerHTML = 0;

    function addone() {
        // Incrémente le compteur
        compteur.innerHTML++;
        // Affiche le compteur dans la console
        console.log(compteur.innerHTML);
        button.classList.toggle("active");

    }
    // Ajoute un écouteur d'événement au clic sur le bouton
    button.addEventListener("click", addone);
});