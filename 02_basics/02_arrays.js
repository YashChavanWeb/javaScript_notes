const marvel_heros = ["thor", "spiderman", "ironman", "Black Panther"]
const dc_heros = ["sueprman", "batman", "flash"]


/* Benefits of Concat over Push */

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const newArray = marvel_heros.concat(dc_heros)
console.log(newArray)



/* Spread Operator */
const spread = [...marvel_heros, ...dc_heros]   //it is not an array, each element has become seperated
console.log(spread)  //more preferred than concat as it has optimization



/* Flat Function */
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //this is complicated but we want a single array with all the elements

const usableAnotherArray = anotherArray.flat(Infinity)
//infinity - identifies the depth automatically
console.log(usableAnotherArray)



/* Array.isArray Function */
console.log(Array.isArray("yash"))   //checks if the given input is an array



/* Array.from Function */
console.log(Array.from("yash"))    //converts the input into an array
console.log(Array.from({name: "yash"}))    //if it cannot convert then gives an empty array



/* Array.of Function */
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3))   //converts the values into an array



