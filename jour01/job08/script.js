// Jour01 - Job08 - Function "Sommenombrespremiers"
// ///////////////////////////////////

// Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables. Si ces deux variables sont des nombres premiers, alors la fonction retourne leur somme. Sinon, la fonction retourne false.

// Déclarez une fonction “sommenombrespremiers” qui prend en paramètres deux variables.
function sommenombrespremiers(nombre1, nombre2) {
    if (nombre1 % 2 == 0 && nombre2 % 2 == 0) {
        return console.log(nombre1 + nombre2);
    } else {
        return console.log(false);
    }
}

// Appeler la fonction “sommenombrespremiers”.
sommenombrespremiers(2, 2);
sommenombrespremiers(2, 3);
sommenombrespremiers(3, 3);
