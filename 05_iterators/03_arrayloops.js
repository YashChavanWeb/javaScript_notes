/* -------------- For Of Loop -------------- */

const arr = [1,2,3,4,5,6]

for(const i of arr){
    console.log(i)
}
console.log("-------------")
const name = "Yash Chavan"
for(const letter of name){
    console.log(letter)
}




/* -------------- Maps Basics -------------- */


const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("MP", "Madhya Pradesh")

console.log(map)
//Properties of Maps
// 1. values will be unique not repeated
// 2. values will be in the same order

//For in loop for map
for(const key in map){   
    console.log(key)    //this will give array of keys together     
}  //wrong

for(const [key,value] of map){
    console.log(`The key is ${key} and value is ${value}`)
}   //right




/* -------------- For Of Loop for Objects -------------- */

//Objects are not iteratable , maps are
// for of loop does not work on objects
// we use for in loop for iterating objects

const short = {
    js : "Javascript",
    cpp : "C++",
    py : "Python"
}

for(const key in short){
    console.log(`${key} is the shortcut for ${short[key]}`)
}


// 1. Can we use for in loop for arrays ??
// we can use it, but it gives the index opposite to for of loop where we directly get values

let role = ["actress", "actor", "sidelead"]
for(const key in role){
    console.log(`${key} for it is ${role[key]}`)
}

// 2. Can we use for in loop for maps ??
// Maps are not iterable so even if it does not give error, it is not iterable
for(const key in map){
    console.log(key);
}




/* -------------- Summary -------------- */
// 1. Objects - for in loop
// 2. Arrays - for of loop



