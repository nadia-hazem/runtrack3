<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour03 - Job02 - Ordonner 'arc-en-ciel' JQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <style>

        .row {
            display: flex;
        }
        .col {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        .flex50 {
            width: 50%;
        }
        button {
            width: 130px;
            height: 50px;
            font-size: 1.5em;
            margin: auto;
        }

    </style>
</head>
<body>
    <div class="row">
        <div class="col">
            <div id="rainbowContainer" class="rainbowContainer flex50 row">
                <img src="img/arc1.png" alt="rainbow1" id="arc1">
                <img src="img/arc2.png" alt="rainbow2" id="arc2">
                <img src="img/arc3.png" alt="rainbow3" id="arc3">
                <img src="img/arc4.png" alt="rainbow4" id="arc4">
                <img src="img/arc5.png" alt="rainbow5" id="arc5">
                <img src="img/arc6.png" alt="rainbow6" id="arc6">        
            </div>
            <div id="selectedContainer" class="flex50 row"></div>
        </div>
        <div class="col">
            <button id="shuffleBtn">Mélanger</button>
            <div id="message"></div> 
        </div>
    </div>


</body>
</html>