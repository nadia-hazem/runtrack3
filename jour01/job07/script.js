// Jour01 - Job07 - Fonction "jourtravaille"
// ////////////////////////////////////////

// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui, $jour $mois $année est un jour travaillé”. $jour correspond au numéro du jour, $mois au mois et $année à l’année. Les jours fériés sont référencés sur https://demarchesadministratives.fr/actualites/calendrier-des-jours-feries-2019-2020-2
021

// Déclarez une fonction “jourtravaille” qui prend en paramètre une date au format Date.

// Il faut noter que cette façon de déclarer une date est utilisée dans le constructeur de la classe Date de JavaScript, qui prend trois arguments: l'année, le mois (indexé à partir de 0) et le jour.

// Cela signifie que new Date(2020, 0, 21) crée une nouvelle instance de la classe Date qui représente le 21 janvier 2020.

// Les jours sont indexés à partir de 1

// Jours fériés : 1er janvier, 13 avril, 1er mai, 8 mai, 21 mai, 1er juin, 14 juillet, 15 août, 1er novembre, 11 novembre, 25 décembre

function jourtravaille(date) {
    // Récupération du jour, du mois et de l'année
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    // Vérification si c'est un jour férié
    if (jour == 1 && mois == 1) {
        console.log("Le " + jour + " janvier " + annee + " est un jour férié");
    } else if (jour == 13 && mois == 4) {
        console.log("Le " + jour + " avril " + annee + " est un jour férié");
    } else if (jour == 1 && mois == 5) {
        console.log("Le " + jour + " mai " + annee + " est un jour férié");
    } else if (jour == 8 && mois == 5) {
        console.log("Le " + jour + " mai " + annee + " est un jour férié");
    } else if (jour == 21 && mois == 5) {
        console.log("Le " + jour + " mai " + annee + " est un jour férié");
    } else if (jour == 1 && mois == 6) {
        console.log("Le " + jour + " juin " + annee + " est un jour férié");
    } else if (jour == 14 && mois == 7) {
        console.log("Le " + jour + " juillet " + annee + " est un jour férié");
    } else if (jour == 15 && mois == 8) {
        console.log("Le " + jour + " août " + annee + " est un jour férié");
    } else if (jour == 1 && mois == 11) {
        console.log("Le " + jour + " novembre " + annee + " est un jour férié");
    } else if (jour == 11 && mois == 11) {
        console.log("Le " + jour + " novembre " + annee + " est un jour férié");
    } else if (jour == 25 && mois == 12) {
        console.log("Le " + jour + " décembre " + annee + " est un jour férié");
    } // Vérification si c'est un week-end
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
        } 
    // Sinon c'est un jour travaillé
    else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}

// Appelez la fonction “jourtravaille” avec la variable “currentYear” en paramètre et affichez le résultat dans la console log.

jourtravaille(new Date(2020, 0, 1));
jourtravaille(new Date(2020, 4, 1));
jourtravaille(new Date(2020, 4, 8));
jourtravaille(new Date(2020, 5, 1));
jourtravaille(new Date(2020, 6, 14));
jourtravaille(new Date(2020, 7, 15));
jourtravaille(new Date(2020, 10, 1));
jourtravaille(new Date(2020, 10, 11));
jourtravaille(new Date(2020, 11, 25));
jourtravaille(new Date(2020, 0, 2));
jourtravaille(new Date(2020, 0, 3));
jourtravaille(new Date(2020, 0, 4));
jourtravaille(new Date(2020, 0, 5));
jourtravaille(new Date(2020, 0, 6));
jourtravaille(new Date(2020, 0, 7));
jourtravaille(new Date(2020, 0, 8));
jourtravaille(new Date(2020, 0, 9));
jourtravaille(new Date(2020, 0, 10));
jourtravaille(new Date(2020, 0, 11));
jourtravaille(new Date(2020, 0, 12));
jourtravaille(new Date(2020, 0, 13));
jourtravaille(new Date(2020, 0, 14));
jourtravaille(new Date(2020, 0, 15));
jourtravaille(new Date(2020, 0, 16));
jourtravaille(new Date(2020, 0, 17));
jourtravaille(new Date(2020, 0, 18));
jourtravaille(new Date(2020, 0, 19));
jourtravaille(new Date(2020, 0, 20));
jourtravaille(new Date(2020, 0, 21));
