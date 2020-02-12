
//                   Opdracht A
/* 
const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function (cool) {
    cool.push("cool")
    return cool
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"])); 
*/


//                   Opdracht B
/*                
const amountOfElementsInArray = (amount) => amount.length

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
*/

//                   Opdracht C
/*
const selectBelgiumFromBenelux = (array) => array[0];
const selectBelgiumFromBeneluxShift = (array) => array.shift();
const selectBelgiumFromBeneluxSlice = (array) => array.slice(0, 1);


console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); // resultaat: "Belgie"
console.log(selectBelgiumFromBeneluxShift(["Belgie", "Nederland", "Luxemburg"]));
console.log(selectBelgiumFromBeneluxSlice(["Belgie", "Nederland", "Luxemburg"]));
*/

//                   Opdracht D
/*
const lastElementInArray = (array) => array[array.length - 1]

// pop(); removes the element from te array
const lastElementInArrayPop = (array) => array.pop();

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
console.log(lastElementInArrayPop(["Haas", "Cavia", "Kip", "Schildpad"])); 
*/

//                   Opdracht E
/*
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    const arraySlice = array.slice(1, 4);
    return arraySlice
}
const impeachTrumpSplice = function (array) {
    const arraySplice = array.splice(1, 4);
    return arraySplice
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
*/

//                   Opdracht F
/*
const stringsTogether = (array) => array.join(" ")

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}" 
*/

//                   Opdracht G

const combineArrays = (array1, array2) => array1.concat(array2)

console.log(combineArrays([1, 2, 3], [4, 5, 6]))