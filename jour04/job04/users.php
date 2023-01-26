<?php
// Jour04 - job04 - Interroger une base de données avec Fetch
/////////////////////////////////////////////////////////////

// Requête SQL pour récupérer les utilisateurs

// Connexion à la base de données
$host = "localhost";
$username = "nadia-hazem";
$password = "*dbpassword*";
$dbname = "nadia-hazem_utilisateurs";

// Créer connexion
$pdo = new PDO('mysql:host='.$host.';dbname='.$dbname, $username, $password);
// Récupération des utilisateurs dans la base de données
$query = $pdo->query('SELECT * FROM `utilisateurs`');
$utilisateurs = $query->fetchAll(PDO::FETCH_ASSOC);
// Affichage du résultat en JSON
echo json_encode($utilisateurs);
?>