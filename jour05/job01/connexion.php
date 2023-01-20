<!--Jour05 - Job01 - Formulaire de connexion JS-->
<?php require_once 'dbConnect.php' ?>
<?php require_once 'script.js'; ?>

<form id="loginForm" action="login.php" method="post">
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom" required>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required>
        <input type="submit" value="Envoyer">
    </form>
