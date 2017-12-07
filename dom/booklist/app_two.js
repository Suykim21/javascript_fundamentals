//  ************NODES*************//

//Nodes are - html body head header comment text attributes
const banner = document.querySelector('#page-banner');

// prints 1 - as element
// for reference go to:
// https://www.w3schools.com/jsref/prop_node_nodetype.asp
console.log('#page-banner node type is ', banner.nodeType);

// prints DIV
console.log('#page-banner node name is ', banner.nodeName);

// prints true/false
console.log('#page-banner has child nodes ', banner.hasChildNodes());

// must pass in true to clone the nested content;
const clonedBanner = banner.cloneNode(true)
// prints nested element of page banner id
console.log(clonedBanner);



//  ************TRAVERING THE DOM*************//

const bookList = document.querySelector('#book-list');

// prints parent node of book-list id
console.log('the parent node is', bookList.parentNode);
// does same thing, if concacenated it will go above more
console.log('the parent node is', bookList.parentElement.parentElement);

// prints all the child elements inside book-list id
console.log(bookList.children);

// dom traversal from sibling to sibling

console.log('book-list next sibling is: ', bookList.nextSibling);

// prints form 
console.log('book-list next element sibling is: ', bookList.nextElementSibling);

console.log('book-list next sibling is: ', bookList.previousSibling);

// prints header
console.log('book-list next element sibling is: ', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';





//  ************EVENTS*************//
// for more references:
// https://www.w3schools.com/jsref/dom_obj_event.asp
var h2 = document.querySelector('#book-list h2');

// eventlisteners takes two parameters, event and callback function
// when it clicks, it will fire function
h2.addEventListener('click', function(e){
    //target will print which element was clicked, in this case: h2
    console.log(e.target);
    console.log(e);
})

/*
var btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // deleting entire li that delete btn is in
        console.log(e.target.parentElement);
        const li = e.target.parentElement;

        //li.parentNode = ul
        //delete child element from ul
        li.parentNode.removeChild(li)
    })
})
*/


//preventDefault() - prevents from refreshing or visiting the page
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, 'was prevented');
})




//  ************EVENT BUBBLING*************//

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    // if clicked on class="delete" inside ul
    if(e.target.className == 'delete'){
        // grab parent element = li associated with delete
        const li = e.target.parentElement;
        // grab parent of li = ul and remove its specific child
        list.removeChild(li);
    }
})