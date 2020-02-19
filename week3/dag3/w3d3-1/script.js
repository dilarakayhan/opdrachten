// Functie 1
const cijfers = (...optelsom) => {
    return optelsom.reduce((num1, num2) => {
        return num1 + num2
    })
}

console.log(cijfers(1, 1, 1, 1, 1, 1, 2, 3))

//Functie 2
const addUp = (a, b, c) => {
    return a + b + c;
}

const numbers = [1, 2, 3, 1, 1, 1];

console.log(addUp(...numbers))

