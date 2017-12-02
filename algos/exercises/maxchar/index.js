// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common String Questions
// What is the most commmon character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str){
    const chars = {};
    let max = 0;
    let maxChar = '';

    for(let character of str){

        if(!chars[character]){
            chars[character] = 1;
        } else {
            chars[character]++;
        }

        // shortway
        // cant say add one to undefined resulting in null
        // if adding one resulted in null value instead assign one;
        // chars[character] = chars[character] + 1 || 1
    }

    for(let char in chars) {
        if(chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;