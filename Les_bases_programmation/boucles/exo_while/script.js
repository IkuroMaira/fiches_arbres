// let prenom = prompt("Quel est votre prenom?");
// let message = `Hello World ${prenom}!`
// document.getElementById("text").innerHTML = message

// EXOS WHILE

// Extraire les nombres pairs dans la boucle
// La boucle for :
// for (début; condition; étape) {
//   ... corps de la boucle ...
// }

for (let i = 2; i <= 10; i++) { // important dans l'écriture d'une boucle quand la variable n'est pas créée en amont, il faut déclarer la variable dans les "arguments"
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Remplacer "for" par "while"
// Tant que la condition est vraie, le code du corps de la boucle est exécuté.
// while (condition) {
  // code
  // appelé "loop body" ("corps de boucle")
// }

for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}

let i = 0
console.log("j'initie : ", i)
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}