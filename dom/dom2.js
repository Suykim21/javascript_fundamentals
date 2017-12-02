// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode - identifying #items parent
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement - same as parentNode
// console.log(itemList.parentElement);

// childNodes - not recommended use children instead
// console.log(itemList.childNodes);

// console.log(itemList.children)
// listing item 2
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild - not recommended use first element child
// console.log(itemList.firstChild);
// first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// LastChild - not recommended use first element child
// console.log(itemList.lastChild);
// last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

// Create a div
var newDiv = document.createElement('div');

// Add Class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

//Add attr
/* <div class="hello" id="hello1" title="Hello Div"></div> */
newDiv.setAttribute('title', 'Hello Div');

// Create text node
/* <div class="hello" id="hello1" title="Hello Div"></div> */
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

// in the header, we want the container class
var container = document.querySelector('header .container');
// in the header, we want to add h1
var h1 = document.querySelector('header h1')

console.log(newDiv);

newDiv.style.fontSize = '30px';

//insertBefore(what we are inserting, what we are inserting before)
container.insertBefore(newDiv, h1);

