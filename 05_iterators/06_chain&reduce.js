/* -------------- Using maps as Filters -------------- */

const nums = [1,2,3,4,5,6,7,8,9]
const store = nums.map( (key)=> key + 10)
console.log(store)



/* -------------- Chaining -------------- */

const val = nums
             .map((key)=> key*10)
             .map((key)=> key+1)
             .filter((key)=> key>40)
console.log(val);




/* -------------- Reduce -------------- */

const init = [1,2,3,4,5]

const now = init.reduce((acc, curval) => {   //parameters passed

    console.log(`Acc: ${acc} and Curr Val : ${curval}`)
    return acc + curval;   //returned value will be stored in accumulator

}, 2)  //this 2 is the initial value of the accumulator

// Note: we can do the same for shopping cart as well , for objects 
// In place of curval we will just write now.price
