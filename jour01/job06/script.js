// Jour01 - Job06 - FizzBuzz
// ///////////////////////////////////

// <!-- Créez une fonction fizzbuzz qui ne prend pas de paramètre. Dans cette fonction, affichez dans la console web les nombres de 1 à 151. Remplacez certains nombres par un mot selon les conditions suivantes :
// ● Si le nombre est un multiple de 3, affichez “Fizz”.
// ● Si le nombre est un multiple de 5, affichez “Buzz”.
// ● Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”. -->

// Créer la fonction
function fizzbuzz() {
    // initialise la variable `i` à 1
    for (let i = 1; i < 151; i++) {
        //Créer les conditions
        // Si le nombre est un multiple de 3 et de 5, affichez "FizzBuzz".
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            // Si le nombre est un multiple de 3, affichez "Fizz".
        } else if (i % 3 == 0) {
            console.log("Fizz");
            // Si le nombre est un multiple de 5, afficher "Buzz"
        } else if (i % 5 == 0) {
            console.log("Buzz");
            // Sinon afficher le nombre
        } else {
            console.log(i);
        }
    }
}

// Appeler la fonction
fizzbuzz();
