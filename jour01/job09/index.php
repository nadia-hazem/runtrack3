<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour01 - Job09 - </title>
    <!-- Appeler le fichier script.js dans la balise head. -->
    <script src="script.js"></script>
    <style>
        body {
            background-color: #f2f2f2;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        form label {
            margin: 10px;
        }
        form input {
            margin: 10px;
        }
        form input[type="button"] {
            width: 120px;
            height: 30px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        form input[type="button"]:hover {
            background-color: #45a049;
        }
        #result, #random {
            margin: 10px;
            text-align: center;
        }
        .set {
            border: 1px solid black;
            width: 200px;
            min-height: 20px;
            padding: 0.5rem;
        }
    </style>
    <!-- Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
“numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau. -->
</head>
<body>
    <div class="container">
        <form>
            <h1 for="order">Ordre de tri </h1>
            <select id="order">
                <option value="asc">Ascendant</option>
                <option value="desc">Descendant</option>
            </select>
            <br>
            <input type="button" value="Générer et Trier" onClick="onFormSubmit()">
        </form>
        <p>Liste aléatoire</p>
        <div class="set">
            <span id="random"></span>
        </div>

        <p>Liste triée</p>
        <div class="set">
            <span id="result"></span>
        </div>
    </div>
</body>
</html>