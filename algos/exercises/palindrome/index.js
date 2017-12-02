// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true 
//   palindrome("abcdefg") === false

/*
// Built-in method way
function palindrome(str){
    const reversed = str.split('').reverse().join('');
    // boolean statement - returns true or false
    return str === reversed;
}
*/

/*
Example of every():
array = [0, 10, 14]
array.every((val) => val > 5)
is 'every' value greater than 5?
*/

/*
// Using array helper
function palindrome(str) {
    // 'abba' => ['a', 'b', 'b', 'a']
    // every(function('a', 0))
    return str.split('').every((char, i) => {
        //return 'a' === str[4-0-1]
        //'a' = str[3] = 'a' = true
        return char === str[str.length - i - 1];
    });
}
*/

function palindrome(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed
    }

    return str === reversed;
}


module.exports = palindrome;