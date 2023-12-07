/* -------------------- Basics -------------------- */

/*
1. document.getElementById('title')  //here title is the id name
2. document.getElementById('title').id   //this will return id
3. document.getElementById('title').class  //this is not allowed
4. document.getElementById('title').className  //returns the class name
5. document.getElementById('title').getAttribute('id')   //this will return title
6. document.getElementById('title').setAttribute('class', 'test')   //this will set the class name to test

7. const title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '5px'

8. title.textContent    //gives the content inside that node (visible/invisible complete)
   title.innerText    //gives the content inside that node (only visible one)
   title.innerHTML    //gives the content inside that node (with html content if any)

*/




/* -------------------- Querry Selectors - gives one value -------------------- */

// document.querySelector('h1')    // this will give the first h1 from the page
// document.querySelector('.nice')    // this will give the first nice class from the page
// document.querySelector('#nice')    // this will give the first nice id from the page
// document.querySelector('input[type="password"')    // for form attributes we use this
// document.querySelector('p:first-child')    // for form attributes we use this

// Example
const myul = document.querySelector('ul')
const colgreen = myul.querySelector('li')
colgreen.style.backgroundColor = "green"
colgreen.style.padding = "10px"
colgreen.innerText = "five"





/* -------------------- Querry Selector All -------------------- */

const temp = document.querySelectorAll('li')
// this gives us node list which is not an array
// temp.style.color = 'green'   -> will give error, we need to define index
temp[0].style.color = "red"  //-> now this is correct and make first li color red

// Note: even if there is only one element in the node list, then too you need to define the things
      // nodelist gives access to for each loop so we can use it




/* -------------------- Converting to Array -------------------- */

const store = document.getElementsByClassName('list-item')
//this will give html collection where we cannot perform any looping concept

const converted = Array.from(store)   //method to convert to array
converted.forEach(key => {
   key.style.color = 'red'
});





















