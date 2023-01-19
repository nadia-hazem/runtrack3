<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour03 - Job02 - JQuery sort game 'Rainbow'</title>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <style>
        .row {
            display: flex;
        }
        .center {
            justify-content: center;
            margin: auto;
            text-align: center;
        }
        #rainbowContainer, #selectedContainer {
            flex: 1;
            overflow: hidden; 
            border: 1px solid black;
            margin: 2em;
            width: 50%;
        }
        #selectedContainer {
            min-height: auto;
        }
        img {
            width: 100px;
            height: auto;
            margin: 1px;
            cursor: pointer;
        }
        button {
            margin: auto;
            width: 120px;
            height: 50px;
        }
        .message {
            margin: 2em;
        }
    </style>
</head>
<body>
    <div class="row">

        <div id="rainbowContainer" class="row center">
            <img src="img/arc1.png" alt="rainbow1" id="arc1">
            <img src="img/arc2.png" alt="rainbow2" id="arc2">
            <img src="img/arc3.png" alt="rainbow3" id="arc3">
            <img src="img/arc4.png" alt="rainbow4" id="arc4">
            <img src="img/arc5.png" alt="rainbow5" id="arc5">
            <img src="img/arc6.png" alt="rainbow6" id="arc6">        
        </div>

        <div id="selectedContainer" class="row center"> </div>

    </div> <!-- / row -->

    <div class="row center"> <button id="shuffleBtn">Mélanger</button> </div>

    <div class="row center message"><div id="message"> </div> </div>


</body>
</html>