// Jour02 - Job06 - Code Konami
// //////////////////////////////////////////////

// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de La Plateforme_.

// Je déclare les variables du Konami avant le DOMContentLoaded pour qu'il soit accessible par la fonction handleKeydown
const konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];
let konamiIndex = 0;

// DOMContentLoaded pour éviter erreur de lancement de script avant chargement du DOM
document.addEventListener("DOMContentLoaded", function() {

    const body = document.querySelector("body");
    const display = document.querySelector("#display");    

    // style initial du body
    body.style.backgroundColor = "#fff";
    body.style.height = "100vh";
    body.style.width = "100vw";
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.color = "#000";
    body.style.fontFamily = "Roboto";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    /* body.style.justifyContent = "center";
    body.style.alignItems = "center"; */
    body.style.fontSize = "2em";
    body.style.fontWeight = "bold";
    body.style.textShadow = "0 0 10px #fff";
    body.style.textTransform = "uppercase";
    body.style.textAlign = "center";
    body.style.letterSpacing = "0.2em";
    body.style.lineHeight = "1.2em";
    h1 = document.createElement("h1");
    h1.style.cssText = "color: #000; font-size: 2em; font-weight: bold; text-shadow: 0 0 10px #fff; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em;";
    h1.innerHTML = "Fonction 'Konami' ";
    display.appendChild(h1);
    h2 = document.createElement("h2");
    h2.style.cssText = "color: #000; font-size: 0.7em; font-weight: bold; text-shadow: 0 0 10px #fff; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em; width: 75%; margin: 0 auto; text-align: justify;";
    h2.innerHTML = "Le code Konami (コナミコマンド, Konami, litt. Commande Konami) est un cheat code (code de triche) utilisé pour activer généralement une option secrète. Il est généralement entré en appuyant sur une séquence spécifique de touches :";
    display.appendChild(h2);
    img = document.createElement("img");
    img.src = "konami.png";
    img.style.cssText = "width: 400px; height: auto; margin-top: 2rem;";
    display.appendChild(img);
    p = document.createElement("p");
    p.style.cssText = "color: #666; font-size: 0.7rem; font-weight: thin; text-transform: uppercase; letter-spacing: 0.2em; line-height: 5em; width: 75%; margin: 0 auto; text-align: center;";
    p.innerHTML = "Testez le code Konami en appuyant sur les touches directionnelles puis sur les touches 'b' et 'a'";
    display.appendChild(p);
    // Event Listener
    document.addEventListener("keydown", handleKeydown);

    function handleKeydown(event) {
        if (event.key === konami[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konami.length) {
                // Konami saisi avec succès
                // On change le style du body
                display.style.display = "none";
                body.style.backgroundColor = "#fff";
                body.style.height = "100vh";
                body.style.width = "100vw";
                body.style.color = "#000";
                body.style.fontFamily = "Roboto";
                body.style.display = "flex";
                body.style.flexDirection = "column";
                body.style.justifyContent = "strech";
                body.style.alignItems = "strech";
                body.style.textAlign = "strech";
                body.style.fontSize = "2em";
                body.style.fontWeight = "bold";
                body.style.textShadow = "0 0 10px #fff";
                body.style.textTransform = "uppercase";
                body.style.letterSpacing = "0.2em";
                body.style.lineHeight = "1.2em";
                
                // Premier rang
                const firstRow = document.createElement("div");
                firstRow.style.display = "flex";
                firstRow.style.flexDirection = "row";

                // Première colonne body
                const col1 = document.createElement("div");
                col1.style.flex = 1;
                col1.style.cssText = "position: relative; width: 50%; height: 100%;";
                justifyContent = "center";
                alignItems = "strech";
                // Ajouter image
                const img = document.createElement("img");
                img.src = "plateforme.jpg";
                img.style.cssText = "width: 100%; height: 100%; left: 0;";
                col1.appendChild(img);
                // Deuxième colonne body
                const col2 = document.createElement("div");
                col2.style.flex = 1;
                col2.style.width = "50%";
                col2.style.height = "100%";
                col2.justifyContent = "center";
                col2.alignItems = "center";
                // Ajouter texte deuxième colonne
                h1 = document.createElement("h1");
                h1.style.cssText = "color: #000; font-size: 1em; font-weight: bold; text-shadow: 0 0 10px #fff; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em; margin: 3em 0 0 0;";
                h1.innerHTML = "La Plateforme_";
                col2.appendChild(h1);
                h2 = document.createElement("h2");
                h2.style.cssText = "color: #000; font-size: 0.7em; font-weight: bold; text-shadow: 0 0 10px #fff; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em;";
                h2.innerHTML = "Campus Numérique Méditerranéen";
                col2.appendChild(h2);
                // Ajouter les colonnes au premier rang
                firstRow.appendChild(col1);
                firstRow.appendChild(col2);
                // second rang
                const secondRow = document.createElement("div");
                const text = document.createElement("p");
                text.innerHTML = "Your text here";
                secondRow.appendChild(text);
                // Ajouter les rangs au body
                body.appendChild(firstRow);
                body.appendChild(secondRow);


                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    }
    document.addEventListener("keydown", handleKeydown);
});