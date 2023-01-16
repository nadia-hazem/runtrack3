// Jour01 - Job09 - Function "tri"
// //////////////////////////////

// Déclarez une fonction “tri” qui prend en paramètres un tableau de nombres nommé “numbers” et une variable “order” qui contient “asc” ou “desc”.
function tri(numbers, order) {
    // A l’aide de la fonction sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.
    if (order == "asc") {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] < numbers[j]) {
                    let temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    } else if (order == "desc") {
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
    return console.log(numbers);
}

// Appeler la fonction “tri”.
tri([5, 4, 3, 2, 1], "asc");
tri([5, 4, 3, 2, 1], "desc");
tri([8, 4, 9, 3, 5, 1, 2, 7, 6], "asc");
tri([8, 4, 9, 3, 5, 1, 2, 7, 6], "desc");
