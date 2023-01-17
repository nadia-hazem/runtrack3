<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour02 - Job03 - Compteur</title>
    <script src="script.js"></script>
    <style>
        body {background-color: #f5f5f5;}
        .container {
            width: 100%; 
            height: 100vh; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            flex-direction: column;
        }
        .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%; 
            height: 100px;
        }
        #compteur {
            font-size: 2rem; 
            font-weight: 700; 
            color: #333; 
            margin-bottom: 1rem;
            height: 100px;
        }
        button {
            padding: 1rem 2rem; 
            font-size: 1.2rem; 
            font-weight: 700; 
            color: #fff; 
            background-color: #333; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
        }
        button:hover {
            background-color: #555;
        }
        .set {
            height: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
    <h1>Fonction "Compteur"</h1>
        <div class="col">
            <h1 id="compteur"></h1>
            <div class="set">
                <button id="button">Incrémenter</button>
            </div>
            <div class="set">
                <p id="compteur" class="set"></p>
            </div>
        </div>
    </div>
</body>
</html>