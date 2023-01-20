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

    const loginBtn = document.querySelector("#loginBtn");
    const registerBtn = document.querySelector("#registerBtn");
    const displayData = document.querySelector("#displayData");

    // Display the login form when the "Connexion" button is clicked
    loginBtn.addEventListener("click", () => {
        document.querySelector("#displayData").innerHTML = `
        <form id="loginForm">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
            <button type="submit">Se connecter</button>
        </form>`;

                // Add a submit event listener to the login form
                const loginForm = document.querySelector("#loginForm");
                loginForm.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    // Get the form data
                    const email = loginForm.querySelector("#email").value;
                    const password = loginForm.querySelector("#password").value;

                    // Send the form data to the PHP script
                    const formData = new FormData(loginForm);
                    const response = await fetch("connexion.php", {
                        method: "POST",
                        body: formData
                    });

                    // Handle the response
                    const data = await response.json();
                    if (data.success) {
                        // If the login was successful, redirect the user to the homepage
                        window.location.href = "index.php";
                    } else {
                        // Display an error message
                        const errorDisplay = document.querySelector("#errorDisplay");
                        errorDisplay.innerHTML = "Identifiants incorrects.";
                    }
                });
    });
    

    // Display the register form when the "Inscription" button is clicked
    document.getElementById("registerBtn").addEventListener("click", () => {
        displayData.innerHTML = `
            <form id="registerForm">
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom">
                <label for="nom">Nom</label>
                <input type="text" id="nom" name="nom">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
                <label for="password2">Confirmation du mot de passe</label>
                <input type="password" id="password2" name="password2">
                <input type="submit" value="Inscription">
            </form>
            <div id="errorDisplay"></div>
            `;
                // Add a submit event listener to the register form
                const registerForm = document.querySelector("#registerForm");
                registerForm.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    // Get the form data
                    const nom = registerForm.querySelector("#nom").value;
                    const prenom = registerForm.querySelector("#prenom").value;
                    const email = registerForm.querySelector("#email").value;
                    const password = registerForm.querySelector("#password").value;
                    const password2 = registerForm.querySelector("#password2").value;
                    let error = false;
                    let errorMessage = "";

                    // Validate the form's input
                    if (!prenom || !nom || !email || !password || !password2) {
                        errorMessage += "Veuillez remplir tous les champs.<br>";
                        error = true;
                    }
                    if (!prenom) {
                        errorMessage += "Le prénom est requis.<br>";
                        error = true;
                    } else if (!nom) {
                        errorMessage += "Le nom est requis.<br>";
                        error = true;
                    } else if (!email) {
                        errorMessage += "L'email est requis.<br>";
                        error = true;
                    } else if (!password) {
                        errorMessage += "Le mot de passe est requis.<br>";
                        error = true;
                    } else if (!password2) {
                        errorMessage += "La confirmation du mot de passe est requise.<br>";
                        error = true;
                    } else if (password !== password2) {
                        // Check that the passwords match
                        errorMessage += "Les mots de passe ne correspondent pas.<br>";
                        error = true;
                    } else if (password.length < 8) {
                        // Check that the password is at least 8 characters long
                        errorMessage += "Le mot de passe doit contenir au moins 8 caractères.<br>";
                        error = true;
                    } else {
                        // Check that the email is in the correct format
                        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!emailRegex.test(email)) {
                            errorMessage += "L'email n'est pas au bon format.<br>";
                            error = true;
                        } else {
                            // Check that the email is not already in use
                            const emailCheck = await fetch("check-email.php?email=" + email);
                            const emailCheckJson = await emailCheck.json();
                            if (emailCheckJson.emailExists) {
                                errorMessage += "L'email est déjà utilisé.<br>";
                                error = true;
                            }
                        }
                    }

                    // Display any errors
                    if (error) {
                        errorDisplay.innerHTML = errorMessage;
                    } else {
                        // If there are no errors, send the form data to the server
                        const formData = new FormData(registerForm);
                        const registerResponse = await fetch("register.php", {
                            method: "POST",
                            body: formData
                        });
                        const registerJson = await registerResponse.json();

                        // Handle the response
                        if (registerJson.success) {
                            // If the registration was successful, redirect the user to the login page
                            window.location = "connexion.php";
                        } else {
                            // Display an error message
                            errorDisplay.innerHTML = "Une erreur est survenue.";
                        }
                    }
                });
            
    });
});


