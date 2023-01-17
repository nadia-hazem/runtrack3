<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour02 - Job04 - Keylogger</title>
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
        textarea:focus {
            background-color: aliceblue;
            border: 1px solid #f5f5f5;
        }
    </style>
</head>
<body>
    <div class="container">
    <h1>Fonction "Keylogger"</h1>
        <div class="col">
            <h1 id="Keylogger"></h1>
            <div class="set">
                <textarea id="keylogger" cols="50" rows="5"></textarea>
            </div>
        </div>
    </div>
</body>
</html>