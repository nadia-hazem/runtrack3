<?php require_once 'dbConnect.php' ?>
<script src="script.js"></script>


<form id="loginForm" action="verification.php">
    <input type="hidden" name="action" value="login">

    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom" required>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password" required>

    <input type="submit" value="Connexion">
    <p class="error"></p>
</form>
