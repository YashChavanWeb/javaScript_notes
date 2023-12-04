/* Creating a Function */
function sayMyname1(num1, num2) {
    console.log("yash chavan");
    console.log(num1 + num2);
}

// Calling a Function
sayMyname1(3, 5);




/* Returning a value from the function */
function sayMyname2(num1, num2) {
    let result = num1 + num2;
    return result;
}

const result2 = sayMyname2(1, 1); 
console.log("Result " + result2);






/* Basics of return and if else */

function userLoggedInMessage(username){
    if(username === undefined){        //username === undefined   (or)  !username
        console.log("you are not a user")
    }
    return  `${username} has logged in successully !`
}

userLoggedInMessage("yash")    //this will not print anything as only the value is returned not printed
console.log(userLoggedInMessage("yash"))   //now it will be printed






/* Rest Operator in Functions */

function addCartPrice(...num1){      //converts all the arguments into array
    return num1;
}

console.log(addCartPrice(100, 200, 300))

function addCartPriceClone(val1, val2,...num1){      //first two values go to val1 and val2
    return num1;
}

console.log(addCartPrice(100, 200, 300,400,500))






/* Passing Objects in Functions */

const user = {
    username : "yash",
    price: 199
}

function passObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

passObject(user);

//calling the function by directly creating the object
passObject({
    username: "sam",
    price: 399
});






/* Passing Arrays in Functions */

const array = [1,2,3,4,5,6]

function giveArrayValue(anyArray){
    return anyArray[2]
}

console.log(giveArrayValue(array))

console.log(giveArrayValue([200, 120, 300,203]))



