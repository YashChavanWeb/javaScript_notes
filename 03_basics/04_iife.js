/* Immediately Invoked Function Expressions (IIFE) */

(function message (){                //named IIFE
    console.log(`DB Connected`)
}) ();   //with this we can invoke this function immediately

// Note:
// first () -> definition of function
// second () -> execution call
// ; is also necessary to end the immediately invoked function
// to avoid Global scope variables pollution we use iife 



((name) => {                  //unnamed IIFE
    console.log(`Another Printing : ${name}`)
}) ("chavan gang")    //we can also give parameters here itself