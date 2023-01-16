<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour01 - Job08 - Function "Sommenombrespremiers"</title>
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
        form input[type="submit"] {
            width: 100px;
            height: 30px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        form input[type="submit"]:hover {
            background-color: #45a049;
        }
        #result {
            margin: 10px;
        }
    </style>
    <!-- Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables. Si ces deux variables sont des nombres premiers, alors la fonction retourne leur somme. Sinon, la fonction retourne false. -->
</head>
<body>
    <div class="container">
        <form id="form">
            <label for="nombre1">Nombre 1:</label>
            <input type="number" id="nombre1" name="nombre1">

            <label for="nombre2">Nombre 2:</label>
            <input type="number" id="nombre2" name="nombre2">

            <input type="submit" value="Addition">
        </form>
    </div>
    <div id="result"></div>

</body>
</html>