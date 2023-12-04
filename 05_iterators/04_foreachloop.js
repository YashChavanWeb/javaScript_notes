const coding = ["Java", "c++", "Swift", "CSS"]

coding.forEach(function (key){
    console.log(key)
})


//Another way of writing function
coding.forEach( (key) =>{
    console.log(key)
})



//Passing a predefined function
function print(key){
    console.log(`Welcome ${key}`);
}
coding.forEach(print)



// Different parameters in for each
coding.forEach( (key, index, arr)=>{
    console.log(key, index, arr)
} )




//Objects inside Array

const language = [
    {
        langname : "android",
        salary: 2000
    },
    {
        langname : "html css js",
        salary: 7000
    },
    {
        langname : "DSA",
        salary: 9999999
    }
]

language.forEach( (item)=>{
    console.log(item.langname)
} )