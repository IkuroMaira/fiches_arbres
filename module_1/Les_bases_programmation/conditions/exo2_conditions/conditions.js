console.log('hello word');

//let age = prompt('Quel âge as-tu?');
let age = 19;

if(age<18){
    console.log('Vous êtes mineur.')
}
else if(age >=18 && age <=24){
    console.log("Tu as une réduction !")
}
else{
    console.log('Vous payez plein tarif.')
}

function pairOuImpair(number){ // On créé une fonction, dans laquelle on met un paramètre 'number' qui sera utilisé à plusieurs endroits
    if(number %2 === 0 ){ // ici la condition 'if' est si le nombre à pour modulo 2 ('%') = divisible par deux. if = si.
        return "c'est un nombre pair"; // dans une fontion on utilise un return
    }
    else{ // la deuxième condition 'sinon' = si pas égal à zéro le nombre est impair. Else = sinon
        return "C'est un nombre impair";
    }
}

console.log(pairOuImpair(5)) // maintenant il faut afficher dans la Console avec un console.log

function iteration(liste){
    for(let i = 0; i < liste.length; i++){ // tant que i est plus petit que le nombre d'élément dans le tableau, i va continuer à s'indenter (soit i+1 pour chaque tour et qui repart du dernier resultat)
        //console.log(liste.length)
        console.log(liste[i])
    }
}

let numbers = [10, 24, 54, 103] // il faut penser que ça commence à l'indice 0 quand on compte le nombre d'éléments dans le tableau. Un tableau s'écrit avec des crochets '[]'
let emojis = ["🍂", "🧠", "🌞"]
let emojis1 = ["chat", "oreille", "soleil"]

//console.log(numbers[1])
iteration(emojis)

let number = [1, 2, 3, 4];

function iterateNumber(liste){
    let i = 0;
    while(i < liste.length){
        liste[i]
        i++
    }
    return i
}

console.log(iterateNumber(number))