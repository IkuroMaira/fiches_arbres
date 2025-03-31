// 1

let test1 = 4*4;
console.log(`test for carré = `,test1);
let test2 = test1 * 10;
console.log(`test for multiple = `, test2)

// Je déclare une variable x avec une valeur pour n'avoir qu'à changer cette variable
let x = 9

// Je créé ma fonction carré
function carre(x) {
    return (x * x);
}

console.log(`Le carré de ${x} est `, carre(x)) // Le resultat est bon selon x et on tombe pareil que sur le test 1

// Je stocke le resultat de la fonction carre dans cette variable
let resultCarre = carre(x);
console.log(`resultCarre = `, resultCarre); // me renvoit aussi 16

function multiple(y) {
    return y * 10;
}

let resultMutiple = multiple(resultCarre);
console.log(`Le résultat de ${resultCarre} multiplié par 10 est : `,resultMutiple);

// __________________________________________________________________________________
// Demander à l'utilisateur de rentrer un nombre
// let userNumber = 5 // test avant d'utiliser le prompt
let userPrompt = prompt("Entrez un nombre :");
let userNumber = parseInt(userPrompt);

function carre2(x) {
    return x * x;
}

let resultCarre2 = carre2(userNumber);
console.log(`Le carré de l'user est : `, resultCarre2);

function multiple2(y) {
    return y * 10;
}

let resultUser2 = multiple2(resultCarre2);
console.log(`Le résultat de ${resultCarre2} multiplié par 10 est : `, resultUser2);


