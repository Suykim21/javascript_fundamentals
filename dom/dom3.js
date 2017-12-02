//  EVENT LISTENER //

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
    document.getElementById('header-title').textContent = 'Changed';
}

/*
// event
function buttonClick(e){
    // prints <button class="btn btn-dark btn-block" id="button">Click Here</button>
    console.log(e.target)
    // prints button
    console.log(e.target.id);
    // prints btn btn-dark btn-block
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    // prints click
    console.log(e.type);
    // prints mouse position
    console.log(e.clientX);
    console.log(e.clientY);
    //prints actual position of the element
    console.log(e.offsetX);
    console.log(e.offsetY);

    // prints true/false if user clicked with alt ctrol or shift
    console.log(e.altkey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

*/

/*
var box = document.getElementById('box');

// listens to parent element
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

// listens to child element
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent)

*/

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// listens to typing
// itemInput.addEventListener('keydown', runEvent);
// it will fire off when typing has stopped
// itemInput.addEventListener('keyup', runEvent);
// combination of keydown and keyup
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e){
    // prevents browser from submitting or refreshing.
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    // prints what we're typing
    console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

