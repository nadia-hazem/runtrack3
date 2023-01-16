// Jour01 - Job04 - Année bisextile
///////////////////////////////////

// Déclarez une variable “currentYear” qui contient l’année actuelle.
let currentYear = 2024;
// Déclarez une fonction “bisextile” qui prend en paramètre une variable “année”. Si l’année est bisextile, la fonction retourne true, sinon elle retourne false.
function bisextile(currentYear) {
// Une année est bisextile si elle est divisible par 4 et non divisible par 100, ou si elle est divisible par 400.
if (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) {
        return true;
} else {
        return false;
}
}
// Appelez la fonction “bisextile” avec la variable “currentYear” en paramètre et affichez le résultat dans la console log.
if(bisextile(2023)){
        console.log("L'année est bisextile");
        }else{
        console.log("L'année n'est pas bisextile");
        }
// Appelez la fonction “bisextile” avec la variable “currentYear” en paramètre et affichez le résultat dans la console log.
console.log(bisextile(2024));
// Appelez la fonction “bisextile” avec la variable “currentYear” en paramètre et affichez le résultat dans une popup.
alert(bisextile(2024));