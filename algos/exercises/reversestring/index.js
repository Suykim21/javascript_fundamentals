// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
// Using built-in methods
function reverse(str) {
    // split turns string into array
    const arr = str.split('');
    // reverses the elements of the array
    arr.reverse();
    // joins all element into one element/string
    return arr.join('');

    // short way
    return str.split('').reverse().join('');
}
*/

// Manual Approach #1
function reverse(str){
    let reversed ='';

    // es6 for loop - only use this syntax when you're iterating all elements
    for (let character of str){
        // reverses the order
        reversed = character + reversed;
    }

    return reversed
}

/*
//es6 way
function reverse(str){
    //reduce method reduces the array to a single value
    //reduce takes two arguments, function and starting position/value
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('abcd')
*/

module.exports = reverse;