<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour02 - Job02 - Fonction "Afficher/cacher"</title>
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
        #citation {
            display: none;
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
            background-color: green; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
        }
        button:hover { background-color: #008000ad;}
        button.active:hover { background-color: #666;}
        button.active { background-color: #333;}
        .set {
            min-height: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Fonction "Afficher/cacher"</h1>
        <div class="col">
            <article id="citation">L'important n'est pas la chute, mais l'atterrissage.</article>
        </div>
        <div class="col">
            <button id="button" class="active">Afficher/cacher citation</button>
        </div>
    </div>
</body>
</html>