// <------------------------- Numbers -------------------------> 

const score = 400
// console.log(score);  //this is a number

const balance = new Number(400)
// console.log(balance);  //this specifies that it is a number

//Decimal
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //this is used for precision

//Precision
let newNumber = 23.689
// console.log(newNumber.toPrecision(3));   //23.7 (first 3 values)
newNumber = 123.689
// console.log(newNumber.toPrecision(3));  //124 (first 3 values)

//Units
const hundreds = 1000000
// console.log(hundreds.toLocaleString());    //according to US Standards
// console.log(hundreds.toLocaleString("en-IN"));   //according to Indian Standards

//For Competitive Programming
/* Here number is the Data type which has various functions */
// Number.MAX_VALUE
// Number.MIN_VALUE




// <------------------------- Maths -------------------------> 

console.log(Math.abs(-4))   //converts negative value to positive only

console.log(Math.round(4.7))   //how we round off in daily life
console.log(Math.ceil(4.7))   //rounds off to upper value
console.log(Math.floor(4.7))   //rounds off to lower value

console.log(Math.min(4, 5, 6, 1, 2, 3, 1))   //gives minimum value in the array
console.log(Math.max(4, 5, 6, 1, 2, 3, 1))   //gives the maximum value in the array

console.log(Math.random());   //random values between 0.00 and 0.99
console.log(Math.floor(Math.random() * 10));  //random values between 0 to 9
console.log(Math.floor(Math.random() * 10) + 1);  //random values between 1 to 10


const min = 10
const max = 20
//Generalized Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min)





















