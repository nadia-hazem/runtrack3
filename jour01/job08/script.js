// Jour01 - Job08 - Function "Sommenombrespremiers"
// ///////////////////////////////////

// Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables. Si ces deux variables sont des nombres premiers, alors la fonction retourne leur somme. Sinon, la fonction retourne false.
/*function sommenombrespremiers(nombre1, nombre2) {    
    if (nombre1 % 2 == 0 && nombre2 % 2 == 0) {
        return console.log(nombre1 + nombre2);
        } else {
            return console.log(false);
        } */

// Appeler la fonction “sommenombrespremiers”.
/* sommenombrespremiers(2, 2);
sommenombrespremiers(2, 3);
sommenombrespremiers(3, 3); */

// ON va améliorer un peu tout ça avec un peu de FrontEnd ;) ->

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    // Déclarez une fonction “sommenombrespremiers” qui prend en paramètres deux variables.
    function sommenombrespremiers(nombre1, nombre2) {
        // Je vérifie nombre1 et nombre2 sont <= 1 (donc pas des nombres premiers)
        if (nombre1 <= 1 || nombre2 <= 1) {
            console.log("Entrez des nombres premiers");
            document.getElementById("result").innerHTML = "Entrez des nombres premiers";
            return;
        }
        // Si nombre1 est divisible par i (i allant de 2 à nombre1), alors nombre1 n'est pas un nombre premier.
        for (let i = 2; i < nombre1; i++) {
            if (nombre1 % i == 0) {
                console.log("Entrez des nombres premiers");
                document.getElementById("result").innerHTML = "Entrez des nombres premiers";
                return;
            }
        }
        // Si nombre2 est divisible par i (i allant de 2 à nombre2), alors nombre2 n'est pas un nombre premier.
        for (let i = 2; i < nombre2; i++) {
            if (nombre2 % i == 0) {
                console.log("Entrez des nombres premiers");
                document.getElementById("result").innerHTML = "Entrez des nombres premiers";
                return;
            }
        }
        // Si nombre1 et nombre2 sont des nombres premiers, alors je retourne leur somme.
        // Number() convertit en nombre.
        let result = Number(nombre1) + Number(nombre2)
        ;
        // Afficher le résultat dans la console.
        console.log(result);
        // Afficher le résultat dans le HTML.
        document.getElementById("result").innerHTML = result;
    }
    // Ajouter un écouteur d'événement sur le bouton "submit" du formulaire.
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let nombre1 = document.getElementById("nombre1").value;
        let nombre2 = document.getElementById("nombre2").value;
        sommenombrespremiers(nombre1, nombre2);
    });
});