<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour08 - Job04 - Tailwind form</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>

    <header>
        <nav class="bg-indigo-500 text-white text-center p-4">
            <ul class="inline-flex">
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Accueil</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Inscription</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Connexion</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main class="min-h-screen">
        <h1 class="text-3xl font-bold text-center m-2 pt-5 pb-3">Traitement du formulaire avec le Framework Tailwind</h1>
        <p class=" w-3/4 mt-2 mb-3 ml-auto mr-auto">Reprenez votre fichier index.php. Toujours sans utiliser de fichier css, ajouter des classes tailwind à votre formulaire afin que son design soit moderne. Ajoutez également des icônes à chacun de vos inputs. N’hésitez pas à mettre des ombres, jouer sur les bords de vos inputs, mais aussi sur les opacités, les codes couleurs, etc.

        <div class="flex items-center justify-center">

            <form class="bg-indigo-50 p-6 rounded-lg shadow-md">
                <div class="w-full mb-5"> <!--civilité-->
                    <label for="civility">Civilité :</label>
                    <input type="radio" id="civility" name="civility" value="Monsieur" class="inline-block ml-5"> Monsieur
                    <input type="radio" id="civility" name="civility" value="Madame" class="inline-block ml-5"> Madame
                </div>
                <div class="inline-block"> <!--prénom-->
                    <label for="first-name">Prénom :</label>
                    <input type="text" id="first-name" name="first-name" class="ml-2 border rounded">
                </div>
                <div class="inline-block ml-2"> <!--nom-->
                    <label for="last-name">Nom :</label>
                    <input type="text" id="last-name" name="last-name" class="ml-2 border rounded">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2 mt-2" for="address">Adresse :</label>
                    <div class="relative rounded-md shadow-sm flex items-center">
                        <input type="text" id="address" name="address" class="w-full form-input py-2 px-3 rounded-md leading-5">
                        <span class="ml-3">
                            <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="mb-4"> <!--email-->
                    <label class="block text-gray-700 font-medium mb-2" for="email">Adresse email :</label>
                    <div class="relative rounded-md shadow-sm">
                        <div class="flex">
                            <span class="inline-flex rounded-md shadow-sm">
                                <input type="email" id="email" name="email" class="form-input py-2 px-3 rounded-md leading-5 rounded-md">
                            </span>
                            <span class="ml-3">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 6a2 2 0 00-2-2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V6zm-7-2a1 1 0 111 1 1 1 0 01-1-1zm-2 8a2 2 0 01-4 0h4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="inline-block"> <!--mot de passe-->
                    <label class="block text-gray-700 font-medium mb-2" for="password">Mot de passe :</label>
                    <div class="relative rounded-md shadow-sm">
                        <div class="flex">
                            <span class="inline-flex rounded-md shadow-sm">
                                <input type="password" id="password" name="password" class="form-input py-2 px-3 rounded-md leading-5 rounded-md">
                            </span>
                            <span class="ml-3">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="inline-block"> <!--confirmer mot de passe-->
                    <label class="block text-gray-700 font-medium mb-2" for="password-confirm">Confirmez le mot de passe :</label>
                    <div class="relative rounded-md shadow-sm">
                        <div class="flex">
                            <span class="inline-flex rounded-md shadow-sm">
                                <input type="password" id="password-confirm" name="password-confirm" class="form-input py-2 px-3 rounded-md leading-5 rounded-md">
                            </span>
                            <span class="ml-3">
                                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mb-4"> <!--passions-->
                    <label class="block text-gray-700 font-medium mb-2">Vos passions :</label>
                    <div class="relative rounded-md shadow-sm">
                        <div class="flex">
                            <span class="inline-flex rounded-md shadow-sm pr-3">
                                <input type="checkbox" id="passion-1" name="passion" value="informatique" class="form-checkbox">
                                <label for="passion-1" class="ml-3">Informatique</label>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm pr-3">
                                <input type="checkbox" id="passion-2" name="passion" value="voyages" class="form-checkbox">
                                <label for="passion-2" class="ml-3">Voyages</label>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm pr-3">
                                <input type="checkbox" id="passion-3" name="passion" value="sport" class="form-checkbox">
                                <label for="passion-3" class="ml-3">Sport</label>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm">
                                <input type="checkbox" id="passion-4" name="passion" value="lecture" class="form-checkbox">
                                <label for="passion-4" class="ml-3">Lecture</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Valider" class="bg-indigo-500 hover:bg-indigo-400 text-white font-medium py-2 px-4 rounded-md">
                </div>
            </form>
        </div>
    </main>

    <footer class="bg-indigo-800 text-white text-center p-4">
        <nav>
            <ul class="inline-flex">
                <li class="mr-6">
                    <a href="index.php" class="text-indigo-300 hover:text-white">Accueil</a>
                </li>
                <li class="mr-6">
                    <a href="index.php" class="text-indigo-300 hover:text-white">Inscription</a>
                </li>
                <li class="mr-6">
                    <a href="index.php" class="text-indigo-300 hover:text-white">Connexion</a>
                </li>
                <li class="mr-6">
                    <a href="index.php" class="text-indigo-300 hover:text-white">Rechercher</a>
                </li>
            </ul>  
        </nav>
    </footer>

</body>
</html>