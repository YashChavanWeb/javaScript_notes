// Types of declaring array 
// const myArr1 = [0,1,2,3,4,5, "yash", true]    
const myArr1 = [0,1,2,3,4,5]    
const myArr2 = new Array(1,2,3,4)

// Note;
// 1. Js arrays are resizable
// 2. Contain Mixed Data Type

// Imp : Js Array-copy-operations create Shallow Copies
// Shallow Copies: Share the same reference point 
// Deep Copies: Do not share the same reference 


//Array Methods

myArr1.push(7)   //adds value at the end
console.log(myArr1)

myArr1.pop(7)    //removes value from the end
console.log(myArr1)

myArr1.unshift(33)    //adds value at the start
console.log(myArr1)

myArr1.shift()    //removes value from the start
console.log(myArr1)

console.log(myArr1.includes(4))   //boolean type to check if 4 is there in array or not
console.log(myArr1.indexOf(4))   //returns the index of the element

const stringArray = myArr1.join()    //converts the array into a string format elements
console.log(myArr1)
console.log(stringArray)


//Slice & Splice
console.log("A: ", myArr1)
console.log()

const slice = myArr1.slice(1,3)  //1 included , 3 excluded and keeps array same
console.log(slice)
console.log("B: ", myArr1)
console.log()

const splice = myArr1.splice(1,3)  //1 included , 3 also included and modifies the array
console.log(splice)
console.log("C: ", myArr1)





