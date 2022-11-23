//DOM manipulation

//GetElementById()
const title = document.getElementById('main-heading');

console.log(title);

//GetElementByClassName()

const listItemsClass = document.getElementsByClassName('list-items');
console.log("listItems class elements:", listItemsClass)

//getElementByTagName()

const listItemsTag = document.getElementsByTagName('li');
console.log("list of li tags: ", listItemsTag)

//querySelector() - select first in query

const firstDivInDoC = document.querySelector('div');
console.log("first div in doc: ", firstDivInDoC);

//querySelectorAll() - select all in query (your cap! lolxdd)
const allDivsInDoc = document.querySelectorAll('div');
console.log("all divs in doc: ", allDivsInDoc)