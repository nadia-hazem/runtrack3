// Jour04 - Job04 - Interroger une base de données avec Fetch
//////////////////////////////////////////////////////////////

// Créez une base de données “utilisateurs” contenant une table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom” et “email”.
// Ajoutez des utilisateurs directement dans phpmyadmin.
// Créez une page users.php qui se connecte à la base de données, récupère l’ensemble des utilisateurs et affiche ces informations au format json.
// Dans votre page index.php, créez un tableau <table> permettant de contenir ces informations ainsi qu’un <button> “update”. Lorsque l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents dans la base de données.
// Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à l’aide de phpmyadmin entre deux clics.

document.addEventListener("DOMContentLoaded", async function() {

    function updateUsers() {
        // Récupérer les utilisateurs avec fetch
        fetch('users.php')
        // Récupérer la réponse au format json
        .then(response => response.json())
        // Afficher les utilisateurs dans la console
        .then(utilisateurs => {
            console.log(utilisateurs);
            // déclarer la variable tbody
            let tbody = document.querySelector('#utilisateurs tbody');
            // Vider le tableau
            tbody.innerHTML = '';
            // Ajouter les utilisateurs dans le tableau
            for (let utilisateur of utilisateurs) {
                // Créer une ligne
                let tr = document.createElement('tr');
                // Ajouter les colonnes
                tr.innerHTML += `
                <td>${utilisateur.id}</td>
                <td>${utilisateur.nom}</td>
                <td>${utilisateur.prenom}</td>
                <td>${utilisateur.email}</td>
                `;
                // Ajouter la ligne au tableau
                tbody.appendChild(tr);
                console.log(utilisateur);
            }
        });
    };
    // Ajouter un écouteur d'événement sur le bouton
    const btn = document.querySelector("#update");
    btn.addEventListener("click", () => {
        // Mettre à jour les utilisateurs
        updateUsers();
    });
    updateUsers();
});