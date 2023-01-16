// Jour01 - Job09 - Function "tri"
// //////////////////////////////

// Déclarez une fonction “tri” qui prend en paramètres un tableau de nombres nommé “numbers” et une variable “order” qui contient “asc” ou “desc”.

// Génère une suite de 9 chiffres aléatoires
function generateRandomNumbers() {
    // On déclare un tableau vide
    let numbers = [];
    // On génère 9 nombres aléatoires entre 0 et 100
    for (let i = 0; i < 9; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    // On affiche le tableau dans la console et le html
    console.log("Liste générée :");
    console.log(numbers);
    return numbers;
}

function tri(numbers, order) {
    // A l’aide de la fonction sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

    if (order == "asc") {
        // On utilise une boucle for imbriquée pour parcourir le tableau
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] < numbers[j]) {
                    // On utilise une variable temporaire pour échanger les valeurs
                    let temp = numbers[i];
                    // On échange les valeurs
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    } else if (order == "desc") {
        // On utilise une boucle for imbriquée pour parcourir le tableau
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] > numbers[j]) {
                    let temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    }
    console.log("Liste triée :");
    console.log(numbers);
    return numbers;
}

// Fonction appelée lorsque le formulaire est soumis
function onFormSubmit() {
    // On récupère les nombres aléatoires
    let numbers = generateRandomNumbers();
    // On affiche les nombres aléatoires dans le html
    document.getElementById("random").innerHTML = numbers;
    // On récupère l'ordre de tri
    let order = document.getElementById("order").value;
    // On affiche l'ordre de tri dans le html
    let sortedNumbers = tri(numbers, order);
    // On affiche les nombres triés dans le html
    document.getElementById("result").innerHTML = sortedNumbers;
}



// Appeler la fonction “tri”.
/* tri([5, 4, 3, 2, 1], "asc");
tri([5, 4, 3, 2, 1], "desc");
tri([8, 4, 9, 3, 5, 1, 2, 7, 6], "asc");
tri([8, 4, 9, 3, 5, 1, 2, 7, 6], "desc"); */
