const tinderUser = new Object()   //this is a singleton Object

// const tinderUser = {}  //this is not a singleton Object  


/* Nesting of Objects */
const userData = {
    email: "some@gmail.com",
    fullname: {
        user1: {
            firstname: "Yash",
            lastname: "Chavan"
        }
    }
}
console.log(userData.fullname.user1.lastname)



/* Joining two Objects */
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
// const obj3 = Object.assign({}, obj1, obj2)   

const obj3 = {...obj1, ...obj2}   //most of the the time this is used
console.log(obj3)   //there can be many values so we take an empty array  -> first is the target and rest are the source



/* Declaring the Objects for Databases */
const users = [
    {   //stored at 0 index
        age: 23,
        email: "yash@gmail.com"
    },
    {   //stored at 1 index
        name: "Yash"
    }
];
console.log(users[0].email);    //accessing the value of such objects



/* Converting Object Values to Array */
console.log(obj1)
console.log(Object.keys(obj1))   //the values are converted to an array
console.log(Object.values(obj1))   //same applies for values
console.log(Object.entries(obj1))   //keys and values both with arrays inside array
console.log(obj1.hasOwnProperty("1"));   //checks if this property is available or not




/* Destructuring of Objects */

const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseLead: "hitesh",
}
//way to call the key of object
// course.courseLead 

const { courseLead } = course    //the value to be extracted is written in {} 
const { courseLead: lead } = course    //you give your own name to the value
console.log(courseLead)
console.log(lead)

//Destructuring example in React
// const navbar = ({ company }) => {

// }
// navbar(company = "hitesh")




/* APIs */

//writing APIs in the form of Objects (JSON File)
// {
//     "name": "yash",
//     "age": "18",
//     "price": "free"
// }

//writing APIs in the form of Arrays
[
    {},
    {},
    {}
]

//Note: jsonformatter.org  to format the complex api code fetched from the user
