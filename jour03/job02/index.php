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
        img {
            width: 100%;
            height: auto;
            margin: 1px;
        }
        .row {
            display: flex;
            justify-content: space-around;
            align-items: center;
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
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            margin: 10px;
        }
        .rainbow-container {
            border: 1px solid black;
            max-height: 300px;
            margin: 0.5em;
        }
        #selectedImages {
            border: 1px solid black;
            min-height: 300px;
            margin: 0.5em;

        }
    </style>
</head>
<body>
    <div class="row">
        <div id="rainbow-container" class="rainbow-container row flex50">
            <img src="img/arc1.png" alt="rainbow1">
            <img src="img/arc2.png" alt="rainbow2">
            <img src="img/arc3.png" alt="rainbow3">
            <img src="img/arc4.png" alt="rainbow4">
            <img src="img/arc5.png" alt="rainbow5">
            <img src="img/arc6.png" alt="rainbow6">        
        </div> <!-- /col rainbow-container -->

        <div id="selectedImages" class="selected row flex50"> </div>
    </div> <!-- /row -->
    <div class="col">
        <button id="shuffle-button">Mélanger</button>
        <div id="message"></div>
    </div> <!-- /col -->
</body>
</html>