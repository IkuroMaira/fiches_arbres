// EXERCICE 1 :
let number1 = 0;

if (number1 >= 0) {
    console.log("Le nombre est positif");
} else {
    console.log("Il est négatif")
}

// EXERCICE 2 :
function drivingLicence(prenom, age) {
    const ageLegal = 17;
    if (age > ageLegal) {
        console.log(`Tu peux conduire un camion ${prenom}!`);
    } else if (age === ageLegal) {
        console.log(`Tu as pil poil le bon age ${prenom}!`);
    } else {
        console.log(`Fais preuve de patience ${prenom}...`);
    }
}

drivingLicence('Albert', 47);

// EXERCICE 3 :
let tmp = 15;

if (tmp < 0) {
    console.log("Freezing weather.");
}
else if (tmp < 10) {
    console.log("Very cold weather.");
}
else if (tmp < 20) {
    console.log("Cold weather.");
}
else if (tmp < 30) {
    console.log("Normal in temp.");
}
else if (tmp < 40) {
    console.log("Its Hot.");
}
else {
    console.log("Its very hot.");
}

// Instruction switch
// HACK
tmp = 7;
switch (true) {
    case (tmp < 0) :
        console.log('Freezing weather.');
        break;
    case (tmp < 10) :
        console.log('Very cold weather.');
        break;
}

age = 17;
( age >= 18 ) ? console.log("Majeure") : console.log("Mineur");
// ( condition ) ? exécuter ce code : exécuter celui‑ci à la place