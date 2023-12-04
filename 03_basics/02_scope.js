//global scope
var c = 2
let a = 100

//block scope
{
    let a = 10
    var b = 20
    // const c = 30
    console.log("Inner : ", a)
}
console.log("Outer : ", a)
console.log(b)
console.log(c)

// Note: Scope check in browser is different   &   scope check in node environment is different




/* Nested Scope */

function one() {
    const username = "yash"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
one()

// Note: Child (two) can access parent (one)     but      parent (one) cannot access child (two)




/* Declaring and calling functions */

console.log(addOne(3))    //even if it is here, still it is running
function addOne(num){
    return num+1;
}


console.log(addTwo(3))     //but here it will not run (hoisting concept)
const addTwo = function(num){
    return num+2
}

