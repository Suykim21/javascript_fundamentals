// *************GET ELEMENT BY ID*************//
document.getElementById('book-list');
var bookList = document.getElementById('book-list')
console.log(bookList);




// *****GET ELEMENT BY CLASSNAME AND TAG NAME****//
var titles = document.getElementsByClassName('title');
//grabbing specific element within class
console.log(titles[0])

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

//cycle through html collections
for(i=0; i <titles.length; i++){
    console.log(titles[i]);
}

//checking to see if its array or not 
console.log(Array.isArray(titles));

// converting html collection into array
// create array from titles*
console.log(Array.isArray(Array.from(titles)))

// another way to cycle
Array.from(titles).forEach(function(item){
    console.log(item);
})




//  ************QUERY SELECTOR*************//
// query selector returns only one first element
// grabbing second child li name in id="book list"
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// prints the wise man's fear
console.log(wmf);

// grabbing all class of name inside li inside #book-list" 
// querySelectorAll returns all elements
var books = document.querySelectorAll('#book-list li .name')
console.log(books);

// unlike getElementByClassName - it returns node list, therefore no need to convert it to array
books.forEach(function(book){
    console.log(book);
})




//  ************CHANGING TEXT & HTML CONTENT*************//
var books = document.querySelectorAll('#book-list li .name');

// iterating node list, therefore no need to convert it to array(since its not a collection)
books.forEach(function(book){
    // textContent returns text inside the the element
    console.log(book.textContent);
    // changes the text into test
    book.textContent = "test";
    // appending does not change original text but appends it
    book.textContent += '(book title)'
});

const bookLists = document.querySelector('#book-list');
// prints html structure inside id="book-list"
console.log(bookLists.innerHTML);

bookLists.innerHTML ='<h2>Books and more books..</h2>'
bookLists.innerHTML += '<p>This is how you add HTML</p>'



