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
console.log("ul child nodes:" , ul.childNodes);//returns nodes of <li> elements and also the text elements
console.log("ul first child:" , ul.firstChild);//returns text because text is technically is a part of node with indentation
console.log("ul last child:" , ul.lastChild);//returns text because text is technically is a part of node with indentation

console.log(ul.children);//return only the 5 list items
console.log(ul.firstElementChild);//returns first element of ul (li[0])
console.log(ul.lastElementChild);//return last element of ul (li[4])



//Sibiling Node Traversal
console.log("previous sibiling: ",ul.previousSibling)//returns text "above" <ul> sibiling  
console.log("next sibiling:", ul.nextSibling)//returns text "below" <ul> sibiling 

console.log("previous element sibiling: ",ul.previousElementSibling)//returns "above" sibiling which is <h1> with id="main-heading"
console.log("next element sibiling:", ul.nextElementSibling)//returns null because there is no element node after the ul