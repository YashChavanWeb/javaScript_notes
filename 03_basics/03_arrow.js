/* This Keyword */

const user = {
    username: "yash",
    price: 199,
    welcomeMessage: function () {
        //when referring to current context, then use this keyword
        console.log(`${this.username} , welcome to website`);
        console.log(this)      //no. of current context
    }
}

user.welcomeMessage()
user.username = "Akshata"
user.welcomeMessage()

console.log(this)     

// Note:

//node enviromnent, so empty object concept
//In windows, it will give global object - Window


//testing
function chai (){
    let username = "shivangi"
    console.log(this.username)      //cannot use this in function, only can be used in object
}
chai()




/* Arrow Function */

//Normal Function Declaration
const naya1 = function () {
    let surname = "chavan"
    console.log(surname)
}

//Arrow Function Declaration
const naya2 = () => {
    let surname = "chavan"
    console.log(this)
}
const naya3 = () => (3 + 4)     //implicit return 
//just one line statement

// Note: {} -> then you should write return        
        //  () -> no need to write return 




        
/* Returning an Object in a Function */

const value = () => ({ name: "Yash" });
console.log(value());



