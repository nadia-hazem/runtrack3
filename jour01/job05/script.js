// Jour01 - Job05 - Hello Javascript!
// ///////////////////////////////////

//Créez une fonction “afficherjourssemaines”. Cette fonction ne prend pas de paramètre. Créez un tableau de strings “jourssemaines” qui contient l’ensemble des jours de la semaine, du Lundi au Dimanche. Ensuite à l’aide d’une boucle for (for!)Affichez un par un ces jours.

// Déclarez une fonction “afficherjourssemaines”.
function afficherjourssemaines() {
    let jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    // Ensuite à l’aide d’une boucle for (for!)Affichez un par un ces jours.
    for (let i = 0; i < jourssemaines.length; i++) {
        console.log(jourssemaines[i]);
    }
}
// Appeler la fonction “afficherjourssemaines”.
afficherjourssemaines();