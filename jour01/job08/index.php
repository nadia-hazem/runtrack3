<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables. Si ces deux variables sont des nombres premiers, alors la fonction retourne leur somme. Sinon, la fonction retourne false. -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour01 - Job08 - Fonction "Sommenombrespremiers"</title>
    <!-- Appeler le fichier script.js dans la balise head. -->
    <script src="script.js"></script>
    <style>
        body {
            background-color: #f2f2f2;
        }
        h1 {text-align: center;}
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        form label {
            margin: 5px;
        }
        form input {
            margin: 5px;
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
        form input[type="number"] {
            min-height: 20px;
            width: 50px;
            font-size: 1rem;
        }
        form input[type="submit"]:hover {
            background-color: #45a049;
        }
        #result {
            border: 1px solid black;
            width: 300px;
            min-height: 20px;
            padding: 0.5rem;
            margin: 5rem auto 0;
            text-align: center;
        }  
    </style> 
</head>
<body>
    <h1>Fonction "Sommenombrespremiers"</h1>
    <div class="container">
        <form id="form">
            <label for="nombre1">Nombre 1:</label>
            <input type="number" id="nombre1" name="nombre1">

            <label for="nombre2">Nombre 2:</label>
            <input type="number" id="nombre2" name="nombre2">

            <input type="submit" value="Addition">
        </form>
    </div>
    <p id="result" class="set"></p>

</body>
</html>