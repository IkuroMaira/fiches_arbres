// 1
const addition3Numbers = (a, b , c) => {
    let total = a + b + c;
    return total;
}

console.log(addition3Numbers(1, 2, 3));

// 2
function addition3NumbersWithArg(a, b, c) {
    let total = a + b +c;
    console.log(`Le résultat de la somme est `, total);
}

addition3NumbersWithArg(1, 3, 5);

// 3
addition3NumbersWithArg(1, 3, 7);
addition3NumbersWithArg(1, 9, 8);
