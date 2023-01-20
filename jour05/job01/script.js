// Jour05 - Job01 - Formulaire de connexion JS
//////////////////////////////////////////////

// Commencez par créer une base de données “utilisateurs” contenant une table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom”, “email” et “password”.
// Ensuite, créez une page d’accueil qui contient un paragraphe “Bonjour $prenom” si l’utilisateur est connecté, sinon deux liens vers une page “inscription.php” et une page “connexion.php”. Ces deux pages permettent aux utilisateurs de créer un compte et de se connecter. 
// L’ensemble des vérifications habituelles de formulaire doivent se faire sans rafraîchissement de la page (en JS donc).
// Exemples de vérifications :
// ● Prénom/Nom bien renseignés,
// ● Mots de passe/Confirmation identiques et suffisamment complexes,
// ● Adresse email non déjà prise et au bon format...
// Un message lié à chaque erreur doit être affiché en dessous de chaque champ du
// formulaire le cas échéant.
// Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de connexion.
// Lorsqu’il se connecte, il est renvoyé vers la page d’accueil.

document.addEventListener("DOMContentLoaded", function () {

    const div = document.querySelector("#displayData");
    const registerBtn = document.querySelector("#registerBtn");
    const loginBtn = document.querySelector("#loginBtn");

    document.getElementById("registerBtn").addEventListener("click", () =>{

        fetch("register.php", {
            method: "POST",
            body: "#formData",
        })
        .then((response) => response.text())
        .then((data) => {
            div.innerHTML = data;
            console.log(data);

        // Formulaire
        const regForm = document.querySelector("#registerForm");

        regForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Validate the form's input
            const nom = regForm.querySelector("#nom").value;
            const prenom = regForm.querySelector("#prenom").value;
            const email = regForm.querySelector("#email").value;
            const password = regForm.querySelector("#password").value;
            const password2 = regForm.querySelector("#password2").value;
            let error = false;
            let errorMessage = "";

        // Vérifier que tous les champs sont remplis
        if (!prenom || !nom || !email || !password || !password2) {
            displayError("Veuillez remplir tous les champs.");
            return;
        }
        if (!prenom) {
            displayError("Le prénom est requis.");
        } else if (!nom) {
            displayError("Le nom est requis.");
        } else if (!email) {
            displayError("L'email est requis.");
        } else if (!password) {
            displayError("Le mot de passe est requis.");
        } else if (!password2) {
            displayError("La confirmation du mot de passe est requise.");
        } else if (password !== password2) {
            // Vérifier que les mots de passe correspondent
            displayError("Les mots de passe ne correspondent pas.");
        } else if (password.length < 8) {
            // Vérifier que le mot de passe fait au moins 8 caractères
            displayError("Le mot de passe doit contenir au moins 8 caractères.");
        } else {
            // Vérifier que l'email est au bon format
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(email)) {
                displayError("L'email n'est pas valide.");
            } else {
                // Vérifier que l'email n'est pas déjà utilisé
                fetch("check-email.php?email=" + email)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.emailExists) {
                            displayError("L'email est déjà utilisé.");
                        } else {
                        // Toutes les validations faites, on peut envoyer les données au serveur
                        fetch("register.php", {
                            method: "POST",
                            body: JSON.stringify({
                                prenom: prenom,
                                nom: nom,
                                email: email,
                                password: password
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.success) {
                                // Rediriger vers la page login si l'inscription est réussie
                                window.location.href = "login.php";
                            } else {
                                displayError("Une erreur s'est produite lors de l'inscription.");
                            }
                        })
                        .catch((err) => console.log(err));
                    }
                })
                .catch((err) => console.log(err));
            }
        }
        // Envoyer les données au serveur
        fetch("register.php", {
            method: "POST",
            body: JSON.stringify({
                prenom: prenom,
                nom: nom,
                email: email,
                password: password
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Rediriger vers la page login si l'inscription est réussie
                    window.location.href = "login.php";
                } else {
                    displayError("Une erreur s'est produite lors de l'inscription.");
                }
            });
        });
    });
});
});

