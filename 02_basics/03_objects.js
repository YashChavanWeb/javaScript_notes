/* Creating Objects using Constructors */
// Object.create  -> it is a singleton 



/* Creating a Symbol */
const mySym = Symbol("A1")



/* Creating Objects using Litrals */
const jsUser = {
    name: "Yash",  //by default name is string and it is a key and yash is its value

    age: 18,
    location: "Vasai",
    email: "yash@gmail.com",
    isLoggedIn: false,
    "full name": "Yash Chavan",   //cannot access this key using dot operator
    [mySym]: "myA1"   //now mySym has become a data type which we are using
}



/* Creating function key inside the object */
jsUser.greetings = function () {
    console.log("Welcome Back Everyone");
}

jsUser.data = function () {
    console.log(`Hello ${this.name} your age is ${this.age}`)
}   //when you are referencing the same object then use this.key



/* Accessing the Objects */
console.log(jsUser.email)   //using dot operator
console.log(jsUser["age"]); //using the key/index
console.log(jsUser[mySym])   //accessing the symbol value
console.log(jsUser)   //at the end says that it is a Symbol

// console.log(jsUser.greetings)   //this will not give value just reference
console.log(jsUser.greetings())   //this will give the value
console.log(jsUser.data())   //this will give the value




/* Changing the values in Objects */
jsUser.email = "chavan@gmail.com"
console.log(jsUser.email)



/* Freezing the object so that no one changes the value */
Object.freeze(jsUser)
jsUser.email = "chetan@gmail.com"   //this will not show error but also not work as well
console.log(jsUser.email)


























