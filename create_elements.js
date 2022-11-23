const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements
ul.append(li);

//modifying the text


/*
const firstListItem = document.querySelector('.list-items');


console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML) // security vunerable
*/

li.innerText = 'X-men';