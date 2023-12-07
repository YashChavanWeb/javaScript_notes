/* --------------- Adding new Values --------------- */

//Normal Approach 
function addLanguage(langname) {
    const li = document.createElement('li')
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")

//Optimized approach
function optimize_lang(langname) {
    const li = document.querySelector('li')
    li.appendChild(document.createTextNode(langname))
    document.querySelector(".language").appendChild(li)
}

optimize_lang("typescript")
optimize_lang("hello")



/* --------------- Editing the Values --------------- */

//Normal Approach
const second = document.querySelector('li:nth-child(2)')
// const first = document.querySelector('li:first-child')
second.innerHTML = "C++"

//Optimized Approach
const newli = document.createElement('li')
newli.textContent = "Java"
second.replaceWith(newli)

// Note: Instead of editing, we create a new element and then append it in right place




/* --------------- Removing the Values --------------- */

const last = document.querySelector('li:last-child')
last.remove();



