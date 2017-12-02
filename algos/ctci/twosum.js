/*
1.1 Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/

// Using an object to store
function checkDupes(str){
    var chars = {};
    for(var i = 0; i <str.length; i++){
        if(chars[str[i]]){
            chars[str[i]] = [str[i]];
            console.log('it has duplicate', chars[str[i]]);
        }
        chars[str[i]] = str[i];
    }
    return chars[str[i]]
}

checkDupes('hello');
