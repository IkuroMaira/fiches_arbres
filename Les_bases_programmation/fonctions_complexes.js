function concat(a+b) {
    return (a + b)
}

console.log(concat("marie","hugo"));

const concat2 = (a, b) => {
    return (a + b)
}

let concat3 = concat2

console.log(concat3("marie", "hugo"))
console.log(concat("marie", "hugo"));

let compose = (f, g, x) => {
    return f(g(x))
}

compose(console.log, (x) => { x + 1}, 5);