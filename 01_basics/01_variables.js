//Declaring the Variables
const accountId = 144332
let accountEmail = "yashchavan4628@gmail.com"
var accountPassword = "12345"
accountCity = "Vasai"    //this is totally safe but should be always avoided
let accountState;    //the value it will hold is undefined


//trying to change every variable
// accountId = 2   //this will throw error
accountEmail = "chavan@gmail.com"
accountPassword = "221"
accountCity = "Papdy"


//to print many variables instead of console.log() we can use 
console.table([accountId, accountEmail, accountPassword, accountCity])   //this prints the data in tabular form

/*
Note : 
Prefer not to use var
because of issue in block scope and functional scope
*/