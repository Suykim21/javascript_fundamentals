/*

Assignment: JavaScript Basics I
Complete the following challenges using JavaScript. After each challenge, comment out the code you wrote and move onto the next challenge. Submit your answers in an HTML document.

Basic 1
• Create a variable x as an empty array []. Log this array to your console.

• Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

• Use .pop() to remove the final element of your array.

• Log the final value of x, what is it?
Basic 2
• Create a const called y, and store an empty array there. Log this to your console.

• Use .push() to add the number 88 to array y.

• What happened?
Basic 3
• Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].

• Print every element to the console.

• Now print every element except the final number.
Basic 4
• Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

• Print the length of all names to the console.

• Now modify your code so only names with a length of 5 print.
Basic 5
• Create a function yell that takes one parameter called string.

• Make yell return that string in all uppercase.

• Where could you look to find out more about uppercasing strings in JavaScript?


*/

// 1
const x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
console.log(x);


// 2
const y = [];
y.push(88); // no error, the operation was allowed
console.log(y);


// 3
const z = [9, 10, 6, 5, -1, 20, 12, 2];
for (let i = 0; i < z.length - 1; i++) {
	console.log(z[i]);
}


// 4
const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (let i = 0; i < names.length; i++) {
	if (names[i].length === 5) {
		console.log(names[i]);
	}
}


// 5
function yell(string) {
	return string.toUpperCase();
};
console.log(yell("hello world"));


/*

Assignment: JavaScript Basics II
In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

function magic_multiply(x, y){
    // --- your code here ---
    return x;
}

Test 1
In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!

let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

Hint: You will need to handle your output differently depending on if x is an array or an integer.

Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

Test 5 - Bonus
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

How could we check if an array is an array?

*/

function magicMultiply(x, y) {

	// 2
	if (x === 0 && y === 0) {
		console.log("All inputs 0");
	}

	// 3
	if (x.constructor === Array) {
		for (let i = 0; i < x.length; i++) {
			x[i] = x[i] * y
		}
		console.log(x);
	}

	// 4
	if (y.constructor === String) {
		console.log("Error: Can not multiply by string");
	}

	// 5
	if (x.constructor === String) {
		let newString = "";
		for (let i = 0; i < y; i++) {
			newString += x;
		}
		console.log(newString);
	}

	// 1
	console.log(x * y);
}

const test1 = magicMultiply(5, 2);
const test2 = magicMultiply(0, 0);
const test3 = magicMultiply([1, 2, 3], 2);
const test4 = magicMultiply(7, "three");
const test5 = magicMultiply("Brendo", 4);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);


/*

Assignment: JavaScript Math
Complete the below challenges using JavaScript's Math object.

Math 1
Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.

Math 2
Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.

Math 3
Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.

Math 4
Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

Math 5
Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.

*/


// Math 1
function zeroNegativity(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			return false;
		}
	}
	return true;
}

// Math 2
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// Math 3
function howManyEven(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (isEven(arr[i])) {
			sum += 1;
		}
	}
	return sum;
}

// Math 4
function createDummyArray(num) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
}

// Math 5
function randomChoice(arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

/*

Assignment: JavaScript Intermediate
Complete the following challenges. All of your code should be in one HTML file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!

Part I
Create a function called starString() that takes a number and returns a string of that many *. For example:

let stars = starString(8)
If we console.log(stars) we should see ******** printed in our terminal.

Part II
Create a function called drawStars() that takes an array of numbers and prints out *.

let x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x) should print the following in when invoked:

****
******
*
***
*****
*******
*************************
Part III
Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.

For example:

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x) should print the following in the terminal:

****
ttt
*
mmmmmmm
*****
*******
jjjjjjjjjjj


*/

// Part I
function starString(num) {
	let stars = "";
	for (let i = 0; i < num; i++) {
		stars += "*";
	}
	return stars;
};

// Part II + III
function drawStars(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			result.push(starString(arr[i]))
		} else if (typeof arr[i] === 'string') {
			let string = "";
			for (let j = 0; j < arr[i].length; j++) {
				string += arr[i][0].toLowerCase();
			}
			result.push(string);
		}
	}
	return result;
}

const y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
const z = [4, 6, 1, 3, 5, 7, 25]

console.log(drawStars(y));
console.log(drawStars(z));

/*

Assignment: JavaScript DOM I
Complete the appendList function. appendList should take an array of strings and the id of a <ul> element, and append all elements of the array as <li> tags.

<html>
<body>
    <h1>Students</h1>
    <ul id="main">
        <!-- this is empty-->
    </ul> 
<script>
    function appendList(array, id){
        // finish this function
    };
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
    appendList(students, target_id);
</script>   
</body>
</html>
Copy
Bonus: Create a new function called superAppend that also takes the type of element we want to append.

function superAppend(array, element, id){
    // element can be p, li, h1, etc etc
};

*/

/* <ul id="main">
<!-- this is empty-->
</ul>
<div id="target">

</div> */


// Part I
function appendList(array, id) {
	for (let i = 0; i < array.length; i++) {
		const e = document.createElement("li")
		e.innerHTML = array[i];
		document.getElementById(id).appendChild(e);
	}
};

// Part II
function superAppend(array, element, id) {
	for (let i = 0; i < array.length; i++) {
		const e = document.createElement(element);
		e.innerHTML = array[i];
		document.getElementById(id).appendChild(e);
	}
}

const students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
const targetId = "main";

appendList(students, targetId);
superAppend(students, "h1", "target");

/*
Creating mutliplication table

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		border and styling for table data 
		td {
			border: 1px solid silver;
			text-align: center;
			width: 40px;
			height: 40px;
		}
		background and bolding for the first element of our rows and data 
		td:first-child, tr:first-child {
			background-color: silver;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<div id="target"></div>
</body>
*/



// define draw table
function drawTable() {
	// create our html string, open up the table tag
	let htmlString = "<table>";
	// outer loop
	for (let i = 0; i < 13; i++) {
		// create a row for each iteration of the outer loop
		htmlString += "<tr>";
		// inner loop
		for (let j = 0; j < 13; j++) {
			// calculate our number
			let nums = i * j;
			// declare data variable
			let data;

			// check if edge case
			if (i === 0) {
				nums = j
			};
			if (j === 0) {
				nums = i
			};

			// check if both are 0, set origin as x
			if (nums === 0) {
				data = "<td>" + "x" + "</td>";
			} else {
				// else populate data
				data = "<td>" + nums + "</td>";
			}

			// add data to the html
			htmlString += data;
		}
		// after the inner loop, we cap our table rows
		htmlString += "</tr>";
	}
	// after the outer loop, we cap our entire table
	htmlString += "</table>";
	document.getElementById("target").innerHTML = htmlString;
}
drawTable();

/*

Assignment: JavaScript Objects
Complete the following challenges.

Challenge 1
Print all of the students and their cohort.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
Copy
Your console should look like the following:

Name: Remy, Cohort: Jan
Name: Genevieve, Cohort: March
Name: Chuck, Cohort: Jan
Name: Osmund, Cohort: June
Name: Nikki, Cohort: June
Name: Boris, Cohort: June
Challenge 2
Print out the below object to match the example.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

Your console should look like the following:

EMPLOYEES
1 - JONES, MIGUEL - 11
2 - BERTSON, ERNIE - 12
3 - LU, NORA - 6
4 - BARKYOUMB, SALLY - 14
MANAGERS
1 - CHAMBERS, LILLIAN - 15
2 - POE, GORDON - 9

*/

// Challenge 1
const students = [{
		name: 'Remy',
		cohort: 'Jan'
	},
	{
		name: 'Genevieve',
		cohort: 'March'
	},
	{
		name: 'Chuck',
		cohort: 'Jan'
	},
	{
		name: 'Osmund',
		cohort: 'June'
	},
	{
		name: 'Nikki',
		cohort: 'June'
	},
	{
		name: 'Boris',
		cohort: 'June '
	}
];

for (const student of students) {
	console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
};

// Challenge 2
const users = {
	employees: [{
			'first_name': 'Miguel',
			'last_name': 'Jones'
		},
		{
			'first_name': 'Ernie',
			'last_name': 'Bertson'
		},
		{
			'first_name': 'Nora',
			'last_name': 'Lu'
		},
		{
			'first_name': 'Sally',
			'last_name': 'Barkyoumb '
		}
	],
	managers: [{
			'first_name': 'Lillian',
			'last_name': 'Chambers'
		},
		{
			'first_name': 'Gordon',
			'last_name': 'Poe '
		}
	]
};

for (const key in users) {
	console.log(key.toUpperCase());
	for (let i = 0; i < users[key].length; i++) {
		const num = i + 1;
		const fname = users[key][i].first_name;
		const lname = users[key][i].last_name;
		const length = fname.length + lname.length;
		console.log(`${num} - ${lname}, ${fname} - ${length}`);
	}
};


/*

Assignment: JavaScript Hoisting
Predict the output of the following snippets. Do not plug these into the interpreter.

Note
Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!

1
console.log(hello);
var hello = 'world';
2
var needle = 'haystack';
test();


function test(){
	var needle = 'magnet';
	console.log(needle);
}
3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}
5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

*/


// 1
// undefined

// 2
// magnet

// 3
// super cool

// 4
// chicken
// half-chicken

// 5
// error

// 6
// undefined
// rock
// r&b
// disco

// 7
// san jose
// seattle
// burbank
// san jose


/*


Assignment: JavaScript Scroll
Fix the following runtime errors from the example code:

• The last character of each string in the words array doesn't show up.

• The blank spaces are not appearing correctly. The cursor does not correctly shift to the right on blank spaces, instead it pauses on the previous letter and jumps to the next letter.

Hint
When you work with code, not all the time will you be working with code that you wrote from scratch. Oftentimes, you'll need to be able to dive into and understand an unfamiliar codebase. Do not feel like you need to write code like this from scratch yet. This assignment is designed to challenge you to understand and debug a couple runtime errors.

Also, consider looking up the setInterval function. It might be easier to debug this by slowing the interval down.

<html>
<head>
	<title>Javascript Demo</title>
	<style>
		body {
			background-color:black;
			font-family: monospace;
			color:white;
			font-size:50px;
			text-align: center;
			margin-top:20%;
		}
		#magic{
			color: #777;
			border-right: 1px solid #777;
			padding-right: 7px;
			display: inline;
		}
	</style>
</head>
<body>
    
	Coding is <div id="magic"></div>
    
  <script>
		var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"],
			el = document.getElementById('magic'),
			word_counter = 0,
			character_counter = 0;
		function updateText()
		{
			el.innerHTML = el.innerHTML+words[word_counter][character_counter++];
			if(character_counter == words[word_counter].length)
			{
				word_counter++; 	//choose a different word
				character_counter = 0;	//start over with the first character of the word
				el.innerHTML = '';  //set the html to be blank
				//if we're displaying the last word, go back to the first word
				if(word_counter == words.length)
					word_counter = 0;
			}
		}
		setInterval(updateText,300);
	</script>
</body>
</html>
*/


{
	/* <html>
	<head>
		<title>Javascript Demo</title>
		<style>
			body {
				background-color:black;
				font-family: monospace;
				color:white;
				font-size:50px;
				text-align: center;
				margin-top:20%;
			}
			#magic {
				color: #777;
				border-right: 1px solid #777;
				padding-right: 7px;
				display: inline;
			}
		</style>
	</head>
	<body>

		Coding is <div id="magic"></div>

		<script> */
	var words = ["fun", "exciting", "about not giving up", "being helpful", "being open", "what I learned at CodingDojo!"],
		el = document.getElementById('magic'),
		wordCounter = 0,
		characterCounter = 0;

	function updateText() {
		var character = words[wordCounter][characterCounter++];

		if (character === ' ') {
			character = "&nbsp;" // use non-breaking space character
		}

		el.innerHTML = el.innerHTML + character;
		if (characterCounter === words[wordCounter].length + 1) {
			wordCounter++; //choose a different word
			characterCounter = 0; //start over with the first character of the word
			el.innerHTML = ''; //set the html to be blank
			//if we're displaying the last word, go back to the first word
			if (wordCounter == words.length) {
				wordCounter = 0;
			}
		}
	}

	setInterval(updateText, 300)};