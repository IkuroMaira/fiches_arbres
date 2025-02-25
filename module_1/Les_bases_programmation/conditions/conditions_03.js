function plusPetit(a, b, c) {
    if (a < b && a < c) {
        // return a;
        console.log(a)
    } else if (b < a && b < c) {
        // return b;
        console.log(b)
    } else {
        // return c;
        console.log(c)
    }
}

plusPetit(2, 3, 1);

// function premierElementTableau(array) {
//     if (array != null) {
//         console.log(array[0]);
//         return array[0];
//     } else {
//         console.log('coucou');
//         return null;
//     }
// }

function premierElementTableau(array) {
    if (array.length > 0) {
        console.log(array[0]);
        return array[0];
    } else {
        // console.log('coucou');
        return null;
    }
}

premierElementTableau(['a', 'b', 'c']);
premierElementTableau([]);

helloWorld = (langage) => {
    if (langage ===  'en') {
        console.log('Hello World');
    } else if (langage === 'es') {
        console.log('Hola Mundo');
    } else if (langage === 'fr') {
        console.log('Bonjour le monde');
    } else {
        console.log('error');
    }
}

helloWorld('es');
helloWorld('fr');
helloWorld('en');

assignGrade = (score) => {
    if (score <= 5) {
        console.log('F')
    } else if (score <= 10) {
        console.log('D')
    } else if (score <= 15) {
        console.log('C')
    } else if (score <= 17) {
        console.log('B')
    } else if (score <= 20) {
        console.log('A')
    } else {
        console.log('error');
    }
}

assignGrade(17);

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('geese', 1));
console.log('I have ' + pluralize('sheep', 2));