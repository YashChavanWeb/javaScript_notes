
/* ------------- Predefined true and false values ------------- */

const userEmail = "yash123.ai"

if(userEmail){   //here userEmail which is string is considered true value
    console.log("Got user Email");
}else{
    console.log("Did not get Email");
}



/* -------------  Falsy values ------------- */

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

/* Truthy values */
// "0" , 'false', " ", [], {}, function(){}



/* ------------- Checking Array in if else condition ------------- */

const nums = [1,2,4,5,2]
const emp = []

if(nums.length === 0) 
console.log("Empty arry")

else if(emp.length === 0)
console.log("Empty emp array")



/* ------------- Checking Object in if else condition -------------  */

const yash = {

}

if(Object.keys(yash).length === 0){
    return 1;
}

// Object.keys() will convert the object to an array and then we will compare that array using .length property 



/* ------------- Some Extra Comparisons ------------- */

false == 0 //this will give true output
false == '' //this also true output
0== ''  //even this will give true output

/*  ------------- Nullish Coalescing Operator (??) -------------  */

// null undefined 

const val1 = null ?? 10
console.log(val1)

// Note: This is specially used if we are not sure about the value getting from the data base 
// So it will use the second value that is 10

const best = undefined ?? 10 ?? 21
// It will assign the very first value that it got which is 10



/*  ------------- Ternary Operator ------------  */

// Syntax: condition ? true : false
const iceTea = 1000;
iceTea > 500 ? console.log("You cannot have it") : console.log*("You can have it")



