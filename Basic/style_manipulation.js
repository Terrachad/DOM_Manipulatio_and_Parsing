//DOM manipulation


const title = document.querySelector('#main-heading');
title.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; //done with inline styling !attention!
console.log("title:", title);



const listItems = document.querySelectorAll('.list-items');
 //not working with array of items !attention!
//listItems.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; 
listItems.forEach(item => item.style.backgroundColor = 'rgba(0, 0, 0, 0.4)');

console.log("list-items:", title);
