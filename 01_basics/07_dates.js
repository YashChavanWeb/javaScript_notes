//Creating the Date Object
let myDate = new Date()
console.log(myDate)   //very much complex so we simplify using functions
console.log(typeof myDate)   //Date is an object



//Applying various methods to simplify the date
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())



//Adding the date according to our terms
let myCreatedDate = new Date(2023, 0, 23)   //Months start from 0 in JS
console.log(myCreatedDate.toDateString())

myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("2023-01-14")   //yy-mm-dd  (can use another as well)
console.log(myCreatedDate.toLocaleString())



let myTimeStamp = Date.now()

//We can compare the two values to mili-seconds 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default" , {
    weekday: "long",
    timeZone: ""
})



