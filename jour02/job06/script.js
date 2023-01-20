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
    body.style.justifyContent = "center";
    display.style.alignItems = "center";
    body.style.alignItems = "strech !important";
    body.style.fontSize = "2em";
    body.style.fontWeight = "bold";
    body.style.textTransform = "uppercase";
    body.style.textAlign = "center";
    body.style.letterSpacing = "0.2em";
    body.style.lineHeight = "1.2em";
    h1 = document.createElement("h1");
    h1.style.cssText = "color: #000; font-size: 2em; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em;";
    h1.innerHTML = "Fonction 'Konami' ";
    display.appendChild(h1);
    h2 = document.createElement("h2");
    h2.style.cssText = "color: #000; font-size: 0.7em; font-weight: bold; text-shadow: 0 0 10px #fff; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em; width: 75%; margin: 0 auto; text-align: justify;";
    h2.innerHTML = "Le code Konami (コナミコマンド, Konami, litt. Commande Konami) est un cheat code (code de triche) utilisé pour activer généralement une option secrète. Il est généralement entré en appuyant sur une séquence spécifique de touches :";
    display.appendChild(h2);
    img = document.createElement("img");
    img.src = "img/konami.png";
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
                // On cache le display
                display.style.display = "none";          
                body.requestFullscreen.justifyContent = "space-between";
                // Premier rang
                const firstRow = document.createElement("div");
                firstRow.style.display = "flex";
                firstRow.style.flexDirection = "row";

                // Première colonne du rang 1
                const col1 = document.createElement("div");
                col1.style.flex = 1;
                col1.style.cssText = "position: relative; width: 50%; height: 100%;";
                justifyContent = "center";
                alignItems = "strech";
                // Ajouter image
                const img2 = document.createElement("img");
                img2.src = "img/plateforme.jpg";
                img2.style.cssText = "width: 100%; height: 100%; left: 0;";
                col1.appendChild(img2);
                // Deuxième colonne du rang 1
                const col2 = document.createElement("div");
                col2.style.flex = 1;
                col2.style.width = "50%";
                col2.style.height = "auto";
                col2.style.backgroundColor = "#336699";
                col2.style.color = "#fff";
                col2.justifyContent = "center";
                col2.alignItems = "center";
                col2.alignContent = "strech";
                // set couleur des icons
                let icons = document.querySelectorAll('.fa');
                icons.forEach(function(icon) {
                icon.style.color = 'white';
                });
                // Ajouter menu icon à col2
                const menuRow = document.createElement("div");
                menuRow.style.display = "flex";
                menuRow.style.textAlign = "center";
                menuRow.style.flexDirection = "row";
                menuRow.style.justifyContent = "center";
                /* menuRow.style.alignItems = "space-between";
                menuRow.style.alignContent = "space-between"; */
                menuRow.style.width = "100%";
                menuRow.style.marginBottom = "3em";
                menuRow.classList.add("row");

                const menuCol = document.createElement("div");
                menuCol.classList.add("col-2");

                const menuList = document.createElement("ul");
                menuList.style.listStyleType = "none";
                menuList.style.marginTop = "3em";
                menuList.style.display = "flex";
                menuList.style.justifyContent = "space-between";

                const link1 = document.createElement("li");
                link1.style.display = "inline-block";
                link1.style.width = '20%';
                link1.innerHTML = "<a href='index.php'><span style='color:white'><i class='fa-solid fa-house'></i></span></a>";

                const link2 = document.createElement("li");
                link2.style.display = "inline-block";
                link2.style.width = '20%';
                link2.innerHTML = "<a href='https://github.com/nadia-hazem' target='_blank'><span style='color:white'><i class='fa-brands fa-github-alt'></i></span></a>";

                const link3 = document.createElement("li");
                link3.style.display = "inline-block";
                link3.style.width = '20%';
                link3.innerHTML = "<a href='https://pictelle.com'><span style='color:white'><i class='fa-brands fa-wordpress' target='_blank'></i></span></a>";

                const link4 = document.createElement("li");
                link4.style.display = "inline-block";
                link4.style.width = '20%';
                link4.innerHTML = "<a href='https://www.linkedin.com/in/pictelle/' target='_blank'><span style='color:white'><i class='fa-brands fa-linkedin-in'></i></span></a>";

                const link5 = document.createElement("li");
                link5.style.display = "inline-block";
                link5.style.width = '20%';
                link5.innerHTML = "<a href='https://laplateforme.io' target='_blank'><img src='img/iconplateforme.png' style='width:40px; vertical-align: bottom;'></a>";

                menuList.appendChild(link1);
                menuList.appendChild(link2);
                menuList.appendChild(link3);
                menuList.appendChild(link4);
                menuList.appendChild(link5);

                menuCol.appendChild(menuList);
                menuRow.appendChild(menuCol);

                col2.appendChild(menuRow);

                // Ajouter texte deuxième colonne
                h1 = document.createElement("h1");
                h1.style.cssText = "font-size: 1.5em; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em; margin: auto;";
                h1.innerHTML = "La Plateforme_";
                col2.appendChild(h1);
                h2 = document.createElement("h2");
                h2.style.cssText = "color: #fff; font-size: 0.7em; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.2em;";
                h2.innerHTML = "Campus Numérique Méditerranéen";
                col2.appendChild(h2);
                const img3 = document.createElement("img");
                img3.src = "img/logoplateforme.svg";
                img3.style.cssText = "width: 200px; height: auto; margin-top: 2rem;";
                col2.appendChild(img3);
                // Ajouter les colonnes au premier rang
                firstRow.appendChild(col1);
                firstRow.appendChild(col2);
                // second rang
                const secondRow = document.createElement("div");
                const text = document.createElement("p");
                text.innerHTML = "Hé oui, encore un fake !";
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