<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour04 - Job04 - Interroger une base de données avec Fetch</title>
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
            button {
                margin: 2% auto;
                display: block;
                width: 120px;
                height: 40px;
                background-color: #888;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
    </style>
</head>

<body>
    <h1>Interroger une base de données avec Fetch</h1>
    <div class="container">

        <button id="update">Mettre à jour</button>

        <table id="utilisateurs">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    
    </div> <!-- /container -->

    <script src="script.js"></script>
</body>
</html>