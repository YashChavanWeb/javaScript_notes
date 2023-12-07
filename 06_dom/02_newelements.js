//Moving from parent to child
const parent = document.querySelector('.parent')
console.log(parent)   //prints all the divs in the parent div
console.log(parent.children)   //gives you an html collection of all the days
console.log(parent.children[1].innerHTML)   //gives html of 2nd day

//Appling for loop
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

//More properties for parent
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

//Moving from child to parent
const dayone = document.querySelector('.day')  //gives first element
console.log(dayone.parentElement)  //directly gives the parent element of the tree
console.log(dayone.nextElementSibling)  //gives its sibling, div to div, li to li
console.log("Nodes ", parent.childNodes);   //gives all the nodes write from enter in the HTML

//Creating a new Element
const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "red"
div.innerText = "This is yash Chavan"

// Note: These all properties we have set, but it is not displaying on the web page 
document.body.appendChild(div)

// Note: For more optimized way, programmers use attribute techinque for innertext
const hold = document.createTextNode("Yash Chavan")
div.appendChild(hold)










