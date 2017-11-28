// Checking permutation of the string

function checkPermute(string1, string2){
    if(string1.length !== string2.length){
        console.log(false);
    } else {
        var sortedString1 = string1.split('').sort().join('');
        var sortedString2 = string2.split('').sort().join('');
        // checks whether if its true or false
        console.log(sortedString1 === sortedString2);
    }
}

checkPermute('aab', 'baa');