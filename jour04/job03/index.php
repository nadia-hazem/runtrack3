<!DOCTYPE html>
<html lang="en">
<head>
<!-- Téléchargez le fichier suivant : pokemon.json 
// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ● id (input type text),
// ● nom (input type text),
// ● type (liste déroulante <select>)
// ● filtrer (input type button).
// Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une page HTML.-->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour04 - Job03 - Formulaire Fetch</title>
    <style>
        h1 {
            text-align: center;
            margin-top: 2%;
        }
        h5 {
            text-align: center;
            margin-top: 5px;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1%;
        }
        table {
                border-collapse: collapse;
                width: 80%;
                margin: 3% auto;
            }
            th,
            td {
                text-align: center;
                padding: 10px;
                border: 1px solid #ddd;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2
            }
            th {
                background-color: #888;
                color: white;
            }
            tr:hover {
                background-color: #f5f5f5; 
            }

    </style>
</head>
<body>
    <h1>Formulaire Fetch</h1>
    <div class="container">
        <form>
            <input type="text" id="id" placeholder="ID">
            <input type="text" id="nom" placeholder="Nom">
            <select id="type">
                <option>Choisir un type</option>
                <option>Fire</option>
                <option>Flying</option>
                <option>Grass</option>
                <option>Ground</option>
                <option>Bug</option>
                <option>Dragon</option>
                <option>Electric</option>
                <option>Fairy</option>
                <option>Fighting</option>
                <option>Ghost</option>
                <option>Ice</option>
                <option>Normal</option>
                <option>Poison</option>
                <option>Psychic</option>
                <option>Rock</option>
                <option>Steel</option>
                <option>Water</option>
            </select>
            <input type="submit" id="filtrer" value="filtrer">
        </form>

        <h5 class="center">* Pour filtrer, veuillez remplir au moins un champ</h5>
        <table>
            <thead>
                <tr>  </tr>
            </thead>
            <tbody id="resultat">
            </tbody>
        </table>
        
    </div>

    <script src="script.js"></script>

</body>
</html>