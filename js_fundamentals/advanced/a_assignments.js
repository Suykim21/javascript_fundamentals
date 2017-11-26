/*

Assignment I: JavaScript Library
Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made. 

Consider the below example:

//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below. 

To create your own custom JavaScript library, you will just add methods to a JS object! (Later on when we teach you about immediate functions you’ll see how to make this more robust to build libraries like jQuery!).

Let’s build a few methods of underscore!

var _ = {
   map: function() {
     //code here;
   },
   reduce: function() { 
     // code here;
   },
   find: function() {   
     // code here;
   },
   filter: function() { 
     // code here;
   },
   reject: function() { 
     // code here;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

Hints:

Look at _.filter when it is invoked.

How many arguments was _.filter passed?
What are those arguments?
If you had to classify them, what names would you give each of them?
Given your answers (especially #3), place those names into your filter as parameters.
Use what you learned in the previous chapter about callbacks and delegation to complete the assignment.

One important concept that we want you to learn through this assignment is how to pass data to and from callbacks. You pass data to a callback with a parameter and you pass data from the callback back to the parent function with a return. While you are going through this assignment pay close attention to this relationship.

Each method’s functionality is described here: underscore.js.

Note that your method does not have to be as robust as underscore’s you just need to get the base functionality working. Therefore for most methods, you will only have the array and a callback as parameters and for the callback, you will pass in each element and potentially a “memo” also known as a “collector”.

*/

const _ = {
  map: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo){
      let el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (let i = el; i < array.length; i++) {
        memo = callback(array[i], memo);
      }
      return memo;

  },
  find: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
  },
  filter: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
  reject: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
}

const array = [3, 4, 5];
_.map(array, function callback(x) { return x * 5; });
console.log(array);
console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
console.log(_.find(array, function callback(x) { return x === 15; }));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
console.log(_.filter(array, function(x) { return x > 20; }));



/*

Hunting Github
When we send a request via AJAX, we need to also set up the list of instructions (callback) that will run as soon as the response is received. In this case, we are using an event handling callback that gets triggered on the “response” event. Let’s see this in action:

We will be using the GitHub API to hunt down online information about yourself. If you navigate to https://api.github.com/users/(your user name) you will see a bunch of JSON data (Remember JSON is just JavaScript Object Notation) that looks like this:

{
  "login": "MikeHannon",
  "id": 7180431,
  "avatar_url": "https://avatars.githubusercontent.com/u/7180431?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MikeHannon",
  "html_url": "https://github.com/MikeHannon",
  "followers_url": "https://api.github.com/users/MikeHannon/followers",
  "following_url": "https://api.github.com/users/MikeHannon/following{/other_user}",
  "gists_url": "https://api.github.com/users/MikeHannon/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MikeHannon/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MikeHannon/subscriptions",
  "organizations_url": "https://api.github.com/users/MikeHannon/orgs",
  "repos_url": "https://api.github.com/users/MikeHannon/repos",
  "events_url": "https://api.github.com/users/MikeHannon/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MikeHannon/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mike Hannon",
  "company": null,
  "blog": null,
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 44,
  "following": 8,
  "created_at": "2014-04-05T00:21:45Z",
  "updated_at": "2015-04-14T23:23:54Z"
}

This is the URL we will be using in our API call: https://api.github.com/users/(your user name). Our goal is to display our name on the page using the GitHub API.

Let’s get started with our request. As you may remember from the AJAX/API chapter, we send an API request using the $.get method from jQuery.

This is just the JS code that will go in your script.js file and don’t forget to get jQuery first!

Below, we are asking jQuery to send a GET Ajax request to the https://api.github.com/users/(your user name) URL and we
are passing it a “displayName” function to run as soon as the Github API sends us a response.

$.get("https://api.github.com/users/(... user name)", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
  console.log(data);
}

Your objective is to create a button that when clicked will send an API request to the GitHub API (see above) and will display your name in a tag below the button.

Optional Use promises (either the q library or ES6) instead of callbacks.

*/

$(document).ready(
  function(){
    $('button').click(function(){
      // as soon as the AJAX request returns, displayName is invoked and passed data!
      //https://api.jquery.com/jquery.get/
      $.get('https://api.github.com/users/githubUserName', displayName);
    });
  function displayName(data){
      if (data.name){
        $('body').append("<p>"+data.name+"</p>");
      }
    }
  }
);

/*

DojoQuery
Reviewing JQuery’s code, we see that they use Immediate functions.

http://code.jquery.com/jquery-1.11.0.js

They expose “$” object and “$” function to the global name space. That is it!

Our assignment is to create our own DojoQuery library that exposes $Dojo to the global namespace. Let’s go over the functionality that $Dojo should have:

The ability to click on an HTML element with a specific id.
The ability to hover on an HTML element with a specific id.
Make sure you wrap your code in an immediate function

$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });

Here are some hints that should help you get started:

$Dojo should be a function that returns an object (an HTML element object)
The object returned by the $Dojo function should have 2 added methods “click” and “hover”
The click method that you attach to the object returned by the $Dojo function should take in 1 parameter which is a callback that gets run on that event.
The hover method that you attach to the object returned by the $Dojo function should take in 2 parameters (what happens when you hover in and what happens when you hover out)
Your code should be wrapped in an immediate function that returns the $Dojo function. Here are some relevant built-in JS methods that should help:

document.getElementById // (makes a DOMobject accessible to JavaScript) takes in one parameter which is the id for a particular element
DOMobject.addEventListener //takes in 2 parameters 1) the event 2) the callback function (Note that this method must be run on an html element)
//Also note that you will need to pay attention to the following built in events from the DOM
DOMobject.click
DOMobject.mouseover
DOMobject.mouseout

This assignment will integrate many of the concepts you have learned so far!

*/

function $Dojo(id) {
  this.myId = document.getElementById(id);
  this.click = function (callback) {
      this.myId.addEventListener("click", callback);
  };

  this.hover = function (hoverin, hoverout) {
      this.myId.addEventListener("mouseover", hoverin);
      this.myId.addEventListener("mouseout", hoverout);
  };

  return this;
}


/*

Assignment: Fib + Nacci
The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.

Using Closures make the Fib function with the following specifications:

function fib() {
  // Some variables here
  function nacci() {
    // do something to those variables here
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"


*/

function fib() {
  let prev = 0;
  let curr = 1;
 
  function nacci() {
    const temp = prev;
 
    console.log(curr);
 
    prev = curr;
    curr = curr + temp;
  }
 
  return nacci
 }
 const fibCounter = fib();
 fibCounter() // should console.log "1"
 fibCounter() // should console.log "1"
 fibCounter() // should console.log "2"
 fibCounter() // should console.log "3"
 fibCounter() // should console.log "5"
 fibCounter() // should console.log "8"


/*

Assignments: Games!
Spend no more than 4 hours to go through some of the code below, study how JavaScript OOP was used, and implement some of the features below. Note that not all code is optimized.

Street Fighter
https://github.com/codingdojoco/street_fighter (play this game at http://www.codingdojo.com/demo/street_fighter/)

Important - the trick with this code is that all the images were derived from the same image file. We used a javascript variable constants to indicate which of the action corresponded to which images. For example, the kick’s animation/picture was found on row 6, column 0-4 of that image (line 55). Each of these sub-image occupied 70px in width and 80px in height (line 66).

Features you can implement (spend no more than 4 hours):

Have Ken do some other actions (like jump, etc)
Find a way to play a background music
Refactor the code in the initialize method (see if you can make it run in less than 5 lines of code!)
(two player version - this is more complicated): https://github.com/codingdojoco/street_fighter/tre …

Falling Words
https://github.com/codingdojoco/wording_game

(play this game at http://www.codingdojo.com/demo/wording_game/)

Features you can implement (spend no more than 4 hours):

Display more words
Add nice background image
Add sound when you get the word right
Add levels and make the game harder as the game progresses (longer words, words falling faster, etc)
Simple airplane game
(no collision detection and still very rough)

https://github.com/codingdojoco/airplane_game - shoots something when you press the space bar Features you can implement (spend no more than 4 hours):

Have the enemy airplane slowly move towards the bottom of the screen
Have the enemy airplane also shoot
Add collision detection so that when you shoot the enemy, it explodes
When the enemy airplane is destroyed, have it generate items that you can fetch to level up in gears, weapons, looks, etc.
JavaScript Tetris Game
https://github.com/johndavid9991/tetrjs_battle - Use arrow keys and space bar, one key at a time.

Go through the codes and study how things are done to create a Tetris game in Javascript. If you have time, you could spend up to 4 hours implementing any of the features below:

Allow the user to keep/reserve the current block by pressing the “Left Shift Key”
Allow user to use the reserved block and have the current block be the new reserved block
When a line is removed, have the blocks retain their original color

*/


/*

(Optional) Assignment: Bind, Call, and Apply
It is possible to write exceptional code without using Bind, Call, and Apply, but these three methods can take your code to the next level.

We talked about the keyword this, and object constructors. In quick summary: when we call new Constructor(); a few things happen:

a new instance of Constructor is created that inherits from object.
the new instance is linked with the Constructor.prototype.
this is bound to the newly constructed instance.
the object is returned.
Bind, Call, and Apply allow us to regulate this.

Create an index.html file and include a main.js file.

Bower install jQuery, and include jquery before the main.js file.

Add a button to the HTML body.

<button name='button'>Click Me</button>

In your main.js file:

// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(){
    console.log("I've been clicked");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick);
In the above example: note that both the customObject and the HTML button have a name. Run it and see what happens!

Modify the button's click function to this:

$('button').click(customObject.onClick.bind(customObject));
Test it!

Now add a new object, also with a name property:

var newObject = {
  name:"West Virginia,  Montani semper liberi"
}
// modify the button method to this:
$('button').click(customObject.onClick.bind(newObject));

At this point, let’s grab a friend who is not working and explain bind to him or her!

Bind also takes an optional argument. Let’s test it out!

change main.js to this:

// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
Bind is a fantastic tool to control which this we are using and pass information from object to object, or use other objects methods and will help DRY out your code.

WARNING: BIND CREATES A NEW METHOD OR OVERWRITES A METHOD IN THE OBJECT

Call and Apply

First: think of Commas when you hear Call, and Arrays when you hear Apply.

Call and Apply allow us to inherit methods from other constructors:

function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);

In this way, you can inherit from multiple parents.

Another use of call and apply: It allows us to use this, without constructing an object with new first:

function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}
var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!'
};
levelUp.call(person);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

*/