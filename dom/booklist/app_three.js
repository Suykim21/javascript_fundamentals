//  ************INTERACTING WITH FORMS*************//
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    // if clicked on class="delete" inside ul
    if(e.target.className == 'delete'){
        // grab parent element = li associated with delete
        const li = e.target.parentElement;
        // grab parent of li = ul and remove its specific child
        list.removeChild(li);
    }
});

//add book-list
const addForm = document.forms['add-book']
//prints form tage with id="add-book"
console.log(addForm);

addForm.addEventListener('submit', function(e){
    //prevents refreshing the page when submitted
    e.preventDefault();
    //.value prints value inputted by user
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //  ************CREATING ELEMENTS*************//

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //  ************STYLES & CLASSES*************//
    /*
    li.style.color = "red";
    li.style.marginTop = "60px";

    //appending class name
    li.className = "test"
    li.className //prints out "test"

    li.className += " test4"
    */

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //append to document
    // appending book name and delete btn to li element
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    //appending li to the ul element inside book-list id
    list.appendChild(li);
})



//  ************ATTRIBUTES*************//
var book = document.querySelector('li:first-child .name');

// prints class name of first child of li
book.getAttribute('class');

// setAttributes takes in two parameters what we want to change ,new value
book.setAttribute('class', 'name-2');

// checking if it has attribute of class, returns true/false
book.hasAttribute('class');

// removing attribute
book.removeAttribute('class');




//  ************CHECKBOXES & CHANGE EVENTS*************//
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})




//  ************CUSTOM SEARCH FILTER*************//

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
// keyup - when typed
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    console.log(term);
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        //inside li check first element which is span with book title
        const title = book.firstElementChild.textContent;
        //lowercasing..indexOf - to see if letter is inside the title.
        // if -1 that means the letter is not in title
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })

})



//  ************TABBED CONTENT*************//
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e) {
  if(e.target.tagName == "LI"){
    const targetPanel = document.querySelector(e.target.dataset.target);
    console.log(targetPanel)
    panels.forEach(function(panel){
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});





