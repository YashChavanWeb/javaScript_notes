//First way to declare string
const name = "Yash"
const age = "18"

//Second way to declare string
const newname = new String('Akshata-Chavan')    //by using objects



//Old way of writing Strings
console.log(name + age);

//Modern way of writing Strings (using Backticks)
console.log(`Hello my name is ${name} and my age is ${age}`)
console.log(newname[2])   //looking like an array but it is not, its an object



//Methods using String
console.log(newname.length)
console.log(newname.toUpperCase())
// Note: these methods dont change the original string just they make a copy and change that

//1. Checking the index and character
console.log(newname.charAt(2))   //here 2 is the position of character
console.log(newname.indexOf("t"))

//2. String Trim
const newString = newname.substring(0, 4)   //last value 4th is not included
console.log(newString);
const anotherString = newname.slice(-14, 4)    //does the same thing
console.log(anotherString);

//3. Extra Space Trim
const stringOne = "     yash     "
console.log(stringOne);
console.log(stringOne.trim());   // removes the starting and the ending spaces

//4. Replace
const url = "https://www.google%20name.com"
console.log(url.replace("%20", "-"));

//5. Check
console.log(url.includes("yash"))
console.log(url.includes("google"))

//6. Split
console.log(newname.split("-"))   //splitted based on dash (-)













