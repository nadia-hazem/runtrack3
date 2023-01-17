// Jour02 - Job01 
// Créez un <article> ayant comme id “citation” et contenant le texte suivant :
// "La vie a beaucoup plus d’imagination que nous”.
// Créez un <button> ayant comme id “button”. Lorsque l’on clique sur le bouton, récupérez le contenu de l’élément ayant comme id “citation” et affichez le contenu dans la console de développement.
// La fonction de récupération et d’affichage doit se nommer “citation()”.



// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    function citation() {
        // récupération du contenu de l'élément ayant comme id "citation"
        let citation = document.getElementById("citation").innerHTML;
        // affichage du contenu dans la console
        console.log(citation);
        }
        // ajout d'un écouteur d'événement sur le bouton
        document.getElementById("button").addEventListener("click", citation);
});