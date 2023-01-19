// Jour04 - Job01 - Fetch
/////////////////////////

let style = document.createElement('style');
style.innerHTML = `
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
}`;

document.head.appendChild(style);

// s'assure que le DOM est entièrement chargé avant d'éxecuter le code
document.addEventListener("DOMContentLoaded", function() {

    // 1. Créer un bouton ayant comme id “button”
    const button = document.getElementById("button");
    // 2. Créer un fichier expression.txt contenant votre expression favorite.
    const result = document.getElementById("result");
    // 3. Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le contenu du fichier expression.txt, placez le dans un paragraphe <p> et insérez le dans le corps de votre page.
    button.addEventListener("click", async () => {
        try {
            // 4. Récupérer le contenu du fichier expression.txt
            const response = await fetch("expression.txt");
            // 5. await permet d'attendre la réponse du serveur avant d'éxecuter la suite du code
            const expression = await response.text();
            // 5. créer un élément <p>
            const p = document.createElement("p");
            // 6. insérer le contenu du fichier dans le paragraphe
            p.innerText = expression;
            // 7. insérer le paragraphe dans le corps de la page
            result.appendChild(p);
            // gestion des erreurs
        } catch (error) {
            console.log(error);
        }
    });
});