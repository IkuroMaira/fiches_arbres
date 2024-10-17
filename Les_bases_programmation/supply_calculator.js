const calculateSupply1 = (age, amountPerDay) => {
    let amountPerYear = 365 * amountPerDay;
    let ageMax = 99;

    if (age >= ageMax) {
        console.log("I'm dead ! 💀")
    } else {
        let result = age * amountPerYear;
        console.log(`You will need ${result} to last you until the ripe old age of ${ageMax}`)
    }

}

calculateSupply1(31, 3)
calculateSupply1(99, 5)
calculateSupply1(70, 7)

// Deuxième version :
console.log("Deuxième version")

const calculateSupply2 = (age1, amountPerDay1) => {
    let ageMax1 = 99 - age1;
    let result1 = (365 * amountPerDay1) * ageMax1;
    let message = `You will need ${result1} cups of tea to last you until the ripe old age of ${ageMax1}`
    console.log(message)
}

calculateSupply2(31, 3)
calculateSupply2(99, 5)
calculateSupply2(70, 400)