// # ATTENDU
/*
si le nombre est divisible par 3 : on écrit Fizz
si le nombre est divisible par 5 : on écrit Buzz
si le nombre est divisible par 3 et par 5 : on écrit Fizzbuzz
sinon : on écrit le nombre
*/

const fizzbuzz = (number) => {
    if (number % 3 == 0 && number % 5 ==0) {
        return "Fizzbuz"
    } else if (number % 5 === 0) {
        return "Buzz"
    } else if (number % 3 == 0) {
        return "Fizz"
    }

    return number
}

module.exports = { fizzbuzz }