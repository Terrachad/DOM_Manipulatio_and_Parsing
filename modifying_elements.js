const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements
ul.append(li);

//modifying the text

li.innerText = 'X-men';

//Modifying Attributes & Classes

li.setAttribute('class', 'list-items');
li.removeAttribute('class', 'list-items');

const title = document.getElementById('main-heading');
console.log(title.getAttribute('id'));


//Add methods & other
li.classList.add('list-items');
//li.classList.remove('list-items');

//check if class list contains some class

console.log(li.classList.contains('list-items'));

//Remove element

li.remove();