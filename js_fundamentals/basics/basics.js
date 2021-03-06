/*

Table of Contents

- Introduction
- Variables
- Math
- Random Numbers
- Strings
- Styling Strings
- If
- Switch
- Ternary Operator
- While
- Do While
- For
- For In
- Arrays
- Functions
- Pass Function as Parameter
- Receive Variable Number of Arguments
- Return Variable Number of Arguments
- Recursive Functions
- Event Handling
- Mouse Events
- Key Events
- Change Tag Value
- Change Class
- Change Input Element
- Mouse X / Y Coordinates
- Get Elements by Tag Name
- Element Styling
- Manipulating URLs
- Editing Child Nodes
- Setting Attributes
- Adding Elements
- OO JavaScript
- Form Validation
- Exception Handling

*/

// ---------- VARIABLES ----------
// variable names can't start with a number, contain spaces, but can
// contain letters, numbers, underscores or $ (Are case sensitive)
var myName = "Derek";
var myAge = 40;
 
// Variables don't have a defined type, which can cause problems
myName = 100;
 
// ---------- MATH ----------
// document.write outputs data to the browser
document.write("5 + 4 = ", 5 + 4, "<br/>");
 
// Using + instead of , will treat everything as a string unless you use ()
document.write("5 + 4 = " + (5 + 4) + "<br/>");
 
document.write("5 - 4 = ", 5 - 4, "<br/>");
document.write("5 * 4 = ", 5 * 4, "<br/>");
document.write("5 / 4 = ", 5 / 4, "<br/>");
 
// Modulus remainder of a division
document.write("5 % 4 = ", 5 % 4, "<br/>");
 
var maxNum = Number.MAX_VALUE;
 
document.write("Max Num = ", maxNum, "<br/>");
document.write("Min Num = ", Number.MIN_VALUE, "<br/>");
 
// Numbers have 16 digits of precision
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");
 
// Round number to 2 decimal places
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");
 
var randNum = 5;
 
// Shortcut for adding 1
document.write("randNum++ = ", randNum++, "<br/>");
document.write("++randNum = ", ++randNum, "<br/>");
 
// The same exists for -
document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");
 
// Perform a calculation on a value and assign the result
document.write("randNum += 5 = ", randNum += 5, "<br/>");
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");
 
// Order of operations
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");
 
// Math properties and methods
document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");
 
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");
 
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");
 
// Convert strings to numbers
document.write("Converted String : ", Number("3.14"), "<br />");
 
document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");
 
// ---------- STRINGS ----------
var randStr = "A long " + "string that " + "goes on and on";
 
// String length
document.write("String Length : ", randStr.length + "<br/>");
 
document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br/>");
 
// Return the value using a start and end index
document.write(randStr.slice(19, 23) + "<br/>");
 
// Return everything after the start index
document.write(randStr.slice(19) + "<br/>");
 
// Return the value using the start index and length
document.write(randStr.substr(19, 4) + "<br/>");
 
// Replace a string
document.write(randStr.replace("and on", "forever") + "<br/>");
 
// Get character at an index
document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");
 
// Split a string into an array
var randStrArray = randStr.split(" ");
 
// Trim white space
randStr = randStr.trim();
 
// Convert to uppercase
document.write(randStr.toUpperCase() + "<br/>");
 
// Convert to lowercase
document.write(randStr.toLowerCase() + "<br/>");
 
// Styling with JS
var strToStyle = "Random String";
 
document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
document.write("Strike : ", strToStyle.strike(), "<br />");
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");
 
 
// ---------- CONDITIONALS ----------
// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && \\ !
 
var age = 8;
 
if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
 
document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
 
// Switch is used to match a limited number of options
switch(age) {
  case 5 :
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;
 
  case 7 :
    document.write("Go to 1st Grade<br />");
    break;
 
  default :
    document.write("Subtract 5 from your age<br />");
}
 
// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
var canIVote = (age >= 18) ? true : false;
 
document.write("Can I Vote : ", canIVote, "<br />");
 
// ---------- LOOPING ----------
 
// while loops as long as a condition is true
var i = 1;
while (i <= 10){
  document.write(i, ", ");
  i++;
}
document.write("<br />");
 
// do while is used when you must go through the loop at least once
do{
  var guess = prompt("Guess a number between 1 and 20");
}while(guess != 15)
 
alert("You guessed it! 15 was the number");
 
// for is a self contained looping structure
for(j = 0; j <= 20; j++){
 
  // If j is divisible by 2 then skip back to the top of the loop
  if((j % 2) == 0){
    continue;
  }
 
  // If j is equal to 15 break completely out of the loop
  if(j == 15){
    break;
  }
  document.write(j, ", ");
}
document.write("<br />");
 
var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};
 
// for in cycles through an enumerable properties of an object
for(k in customer){
  document.write(customer[k], "<br />");
}
 
// ---------- ARRAYS ----------
// Arrays have variable sizes and can contain multiple types in JS
var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
document.write("1st State : ", tomSmith[0], "<br />");
 
// Add an item
tomSmith[3] = "tsmith@aol.com";
 
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// Delete the 4th index item
tomSmith.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");
 
// Delete an index
delete tomSmith[3];
 
// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();
 
// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y });
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(tomSmith);
 
// Remove the last item
tomSmith.pop();
 
// Add items to the end
tomSmith.push("555-1212", "US");
 
// Deletes the first item
tomSmith.shift();
 
// Adds item to the first index
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write(tomSmith[i], "<br />");
}
 
// ---------- FUNCTIONS ----------
// Functions provide code reuse and eliminate repetitive code
 
// Define a function that checks if a value is in an array
function inArray(arrayToCheck, value){
  for(i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] === value){
      return true;
    }
  }
  return false;
}
 
var randArray = [1,2,3,4,5];
 
document.write("In Array : ", inArray(randArray, 4), "<br />");
 
// Local variables defined in functions can't be accessed outside of
// the function
 
function times2(num){
  var var2 = 2;
  return num * var2;
}
 
// Causes Error : document.write("Val of var2 : ", var2, "<br />");
 
// Pass a function as a parameter
function times3(num){
  return num * 3;
}
 
function multiply(func, num){
  return func(num);
}
 
document.write("3 * 15 = ", multiply(times3, 15), "<br />");
 
// Define a function expression
// We can assign functions to variables, store them in arrays,
// pass them into other functions and return them from functions
var triple = function(num){
  return num * 3;
};
 
document.write("3 * 45 = ", multiply(triple, 45), "<br />");
 
// Receive variable number of arguments
function getSum(){
  var sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
 
document.write("Sum : ", getSum(1,2,3,4,5), "<br />");
 
// Return a variable number of values
function times2(theArray){
 
  var newArray = [];
  for(i = 0; i < theArray.length; i++){
    newArray.push(theArray[i] * 2);
  }
  return newArray;
}
 
document.write("Array Doubled : ", times2([1,2,3,4,5]).toString(), "<br />");
 
// Recursive Function
function factorial(num){
  if(num <= 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
 
document.write("Factorial of 4 : ", factorial(4), "<br />");
 
// 1st: num = 4 * factorial(3) = 4 * 6 = 24
// 2nd: num = 3 * factorial(2) = 3 * 2 = 6
// 3rd: num = 2 * factorial(1) = 2 * 1 = 2
 
 
// ---------- EVENT HANDLING ----------
function openAlert(mess){
  alert(mess);
}
 
 
// ---------- DATE ----------
// Get a Date object
var curDate = new Date();
 
document.write("Date : ", curDate.getDate(), "<br />");
document.write("Month : ", curDate.getMonth(), "<br />");
document.write("Day : ", curDate.getDay(), "<br />");
document.write("Year : ", curDate.getFullYear(), "<br />");
document.write("Time : ", curDate.getHours(), ":", curDate.getMinutes(),
  ":", curDate.getSeconds(), ":", curDate.getMilliseconds(), "<br />");
 
// Create a Date object for my birthday
var myBD = new Date("December 21, 2015");
 
var msForBD = myBD.getTime();
var timeNow = curDate.getTime();
var tilMyBD = msForBD - timeNow;
 
document.write("Days til Birthday : ", tilMyBD / (1000 * 60 * 60 * 24), "<br />");
 
