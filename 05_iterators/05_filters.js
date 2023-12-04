/* ------------- Drawback of for each loop ------------- */

//this will not work
const coding = ["Java", "c++", "Swift", "CSS"]
coding.forEach((key) => {
    return key
})

// it does not return a value when we store it in the variable
// so we use filters to return value automatically




/* ------------- Filters ------------- */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4   // we need to write return here
})
console.log(newNums)


//Better way of writing this in single line

const newNums1 = myNums.filter((num) => num > 4)
// Note: When we open scope -> use return , else don't 


// Using the same logic but, with the for each loop

const nums = []
myNums.forEach( (key) => {
    if(key<10){
        nums.push(key)
    }
} )
console.log(nums)



/* ------------- Small Exercise ------------- */

const library = [
    {sub : "history", pages : 121},
    {sub : "science", pages : 223},
    {sub : "english", pages : 156},
    {sub : "maths", pages : 109},
    {sub : "marathi", pages : 333}
]

const store = library.filter( (key)=>{
return key.pages >200
} )

console.table(store);









