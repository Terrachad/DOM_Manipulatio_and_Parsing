//DOM manipulation


//Traverse the DOM

//Parent node traversal

let ul = document.querySelector('ul');
console.log(ul);

//1 option
console.log(ul.parentElement.parentElement);
//2 option
console.log(ul.parentNode.parentNode);


const html = document.documentElement;
console.log("html parentElement: ", html.parentElement); //returns null
console.log("html parentNode: ", html.parentNode); //returns #document


//Child Node Traversal
console.log(ul.childNodes);


//Sibiling Node Traversal