<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour04 - Job02 “jsonValueKey()”</title>
    <style>
        pre {
            background-color: lightgrey;
            width: 80%;
            margin: 2rem auto;
        }
    </style>
    
</head>
<body style="text-align: center;">
    <h1 style="text-align:center;">“ jsonValueKey() ”</h1>
    <div id="output"></div>
    <pre>
    <code>
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
    </code>
    </pre>

    <!-- Placé ici il sera lu après chargement de la div output et ne renverra pas d'erreur -->
    <script src="script.js"></script>
</body>
</html>