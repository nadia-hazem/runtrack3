<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour02 - Job01 - fonction "Afficher citation"</title>
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
    #citation {
        font-size: 2rem; 
        font-weight: 700; 
        color: #333; 
        margin-bottom: 2rem;
    }
    #button {
        padding: 1rem 2rem; 
        font-size: 1.2rem; 
        font-weight: 700; 
        color: #fff; 
        background-color: #333; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
    }

    </style>
</head>
<body>
    <div class="container">
        <article id="citation">La vie a beaucoup plus d’imagination que nous</article>
        <button id="button">Afficher citation dans la console</button>

    </div>
    </div>
</body>
</html>