<!-- -->
<?php require_once 'dbConnect.php' ?>
<?php require_once 'script.js'; ?>

<form id="registerForm">
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" required>
        <label for="lastname">Nom</label>
        <input type="text" name="nom" id="nom" required>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" required>
        <label for="password2">Confirmer le mot de passe</label>
        <input type="password" name="password2" id="password2" required>
        <input type="submit" value="Envoyer">
    </form>

