// let score = 33 //we are not sure what data type we will get

// Case 1:
// let score = "33"
// console.log(typeof score);

// let numberValue = Number(score)
// console.log(typeof numberValue);

// Case 2:
let score = "33abc"
console.log(typeof score);

let numberValue = Number(score)
console.log(typeof numberValue);
console.log(numberValue)   //NaN -> not a number
console.log(numberValue)

/* Conversions to Number */
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN 

/* Conversions to Boolean */
// "" => false
// "yash" => true


// <----------------- Operations ----------------->

console.log(2 ** 3);   //this will be considered as 2^2

/* Confusing String to Number Conversion */
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)  //first come first serve (output in string)
console.log(1 + 2 + "2")  //first come first serve (output in number)


