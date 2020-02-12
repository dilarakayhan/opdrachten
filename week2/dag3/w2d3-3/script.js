//                       Opdracht A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = (superheroes) => superheroes.find((spiderman) => spiderman.name === "Spiderman")

console.log(findSpiderMan(superheroes))


//                       Opdracht B

const doubleArrayValues = (array) => array.map((numbers) => numbers * 2)

console.log(doubleArrayValues([1, 2, 3]))

//                       Opdracht C

const containsNumberBiggerThan10 = (array) => array.some(number => number > 10)

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))


//                       Opdracht D

const isItalyInTheGreat7 = (isittho) => isittho.includes("Italy")

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))

//                       Opdracht E

const tenfold = (array) => array.map(numbers => numbers * 10)

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))


//                       Opdracht F

const isBelow100 = (array) => array.every(numbers => numbers < 100)

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))


//                       Opdracht G

const bigSum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118






