// Data types are classified on the basis of : 
// how we place data in memory and how we access it

// # PRIMITIVE TYPE
// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

// # REFERENCE TYPE (Non-Primitive)
// 3 types : Arrays, Objects, Functions
// their bydefault type is object 


const id = Symbol('123')
const anotherId = Symbol('123')
console.table(id === anotherId) //this returns false/

const bigNumber = 121212121212121212121212n   //n converts to bigint
console.log(typeof bigNumber)


// <---------------------------- Stack & Heap Memory -------------------------------------> 

// Stack - Primitive => you are provided with a copy of the value 
let myname = "yash"
let another = myname;
another = "akshata"     //you changed the copy of another name not the original value which is myname

console.log(myname);
console.log(another);

// Heap - Non-Primitive
let userOne = {
    email: "yash@gmail.com",
    upi: 123
}

let userTwo = userOne      // points to the same location as reference
userTwo.email = "chavan@gmail.com"   // changes the main location data

console.table([userOne.email, userTwo.email]);   //both are changed