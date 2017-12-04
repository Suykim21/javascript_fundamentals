// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// REGEX
//const word = "HI THERE!!!!!"
//word.replace(/[^\w]/g, "").toLowerCase();
// prints hithere

/*
const obj = {
    a: 1,
    b: 1,
    c: 1
}
//prints ["a","b","c"]
Object.keys(obj)
//prints 3
Object.keys(obj).length
*/

/*
// Of interates the array
for(let char of str)
// In interates the object
for(let char in str)
*/

/*
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    for (let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

// helper function
function buildCharMap(str){
    const charMap = {};
    
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
*/

/*
// Method #2

const numbers = ['z', 'c', 'a'];

// sorts alphabetically - prints a c z
numbers.sort();

const str = "Hello There!"
str.replace(/[^\w]/g, "").toLowerCase().split('').sort('').join('');
prints eeehhllort
*/

function anagrams(stringA, stringB){
    // returns true or false
    return cleanString(stringA) === cleanString(stringB);
}

// helper function
function cleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
