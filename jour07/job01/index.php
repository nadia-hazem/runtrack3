<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour08 - Job01 - Tailwind form</title>
</head>

<body>

    <header>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>Création de compte</h1>
            <form>
                <div>
                    <label for="civility">Civilité:</label>
                    <input type="radio" id="civility" name="civility" value="Monsieur"> Monsieur
                    <input type="radio" id="civility" name="civility" value="Madame"> Madame
                </div>
                <div>
                    <label for="first-name">Prénom:</label>
                    <input type="text" id="first-name" name="first-name">
                </div>
                <div>
                    <label for="last-name">Nom:</label>
                    <input type="text" id="last-name" name="last-name">
                </div>
                <div>
                    <label for="address">Adresse:</label>
                    <input type="text" id="address" name="address">
                </div>
                <div>
                    <label for="email">Adresse email:</label>
                    <input type="email" id="email" name="email">
                </div>
                <div>
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password">
                </div>
                <div>
                    <label for="password-confirm">Confirmez le mot de passe:</label>
                    <input type="password" id="password-confirm" name="password-confirm">
                </div>
                <div>
                    <label>Vos passions:</label>
                    <input type="checkbox" id="passion-1" name="passion" value="informatique"> Informatique
                    <input type="checkbox" id="passion-2" name="passion" value="voyages"> Voyages
                    <input type="checkbox" id="passion-3" name="passion" value="sport"> Sport
                    <input type="checkbox" id="passion-4" name="passion" value="lecture"> Lecture
                </div>
                <div>
                    <input type="submit" value="Valider">
                </div>
            </form>
    </main>

    <footer>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>  
        </nav>
    </footer>

</body>
</html>