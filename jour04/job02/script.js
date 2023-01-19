// Jour04 - Job02 - “jsonValueKey()”
/////////////////////////

// Créez une fonction javascript “jsonValueKey()” qui prend en paramètre une chaîne de caractères au format json et une clé.
// Cette fonction retourne la valeur liée à cette clé dans la chaîne de caractères.
// Par exemple : si la string passée en paramètre est :
// “{
// name: "La Plateforme_",
// address: "8 rue d'hozier",
// city: "Marseille",
// nb_staff: "11",
// creation:"2019"
// }”
// et la clé est “city”, la fonction retourne “Marseille.”


let jsonString = '{"name": "nadia", "age": 54, "city": "Mars"}';
let key = "city";

function jsonValueKey(jsonString, key) {
    let json = JSON.parse(jsonString);
    return json[key];
}

// Affichage console
console.log(jsonValueKey(jsonString, key)); // affichera "Mars"
// Affichage HTML
let output = jsonValueKey(jsonString, key);
document.getElementById("output").innerHTML = output;