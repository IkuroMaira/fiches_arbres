let myNumber = 1252

// Je vérifie que mon chiffre est plus petit que 1000
let isMyNumberLessThan1000 = myNumber < 1000
console.log("Mon nombre est plus petit que 1000: ", isMyNumberLessThan1000 )

// Je vérifie que mon chiffre est différent de 1000
let isMyNumberEqualTo1000 = myNumber != 1000
console.log("Mon nombre est différent de 1000: ", isMyNumberEqualTo1000 )

// Je vérifie que mon chiffre est plus grand ou égal à 1000
let isMyNumberBiggerOrEqualTo1000 = myNumber >= 1000
console.log("Mon nombre est égale ou plus grand à 1000: ",isMyNumberBiggerOrEqualTo1000)

// Je vérifie que mon chiffre est pair
let isPair = myNumber % 2 == 0      // le % représente le modulo
console.log("Mon chiffre est pair isPair: ", isPair)

// Il manque :
// - strictement égal ===
// OR
// NOT
// AND
// Et plein d'autres selon à quoi ils servent

let myNumber1 = 1252
let isMyNumberLessThan1000_1 = myNumber1 < 1000

if (isMyNumberLessThan1000_1){
    console.log("Mon nombre est plus petit que 1000")
} else {
    console.log("Mon nombre est plus grand ou égal à 1000")
}

const fromage = "Comté";

if (fromage) {
    console.log("Ouaips&nbsp;! Du fromage pour mettre sur un toast.");
} else {
    console.log("Pas de fromage sur le toast pour vous aujourd'hui.");
}

let coursesFaites = false;

if (coursesFaites) {
    // pas besoin d'écrire explicitement '=== true'
    let argentDePoche = 10;
    console.log(argentDePoche);
} else {
    let argentDePoche = 5;
    console.log(argentDePoche);
}
