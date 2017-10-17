// (print 1-255) 

for(var i=1; i<256; i++) {
    console.log(i);
}

// Print odd numbers from 1 to 1000

for(var i=1; i<=1000; i=i+2){
    console.log(i);
}

// Print the sum of all the odd numbers from 1 to 5000

var sum = 0;

for(var i=1; i<=5000; i=i+2){
    sum = sum + i;
}
console.log(sum);

// Iterating through the array

var x = [1,3,5,7,9,13];

for(var i=0; i<x.length; i++){
    console.log(x[i]);
}

// Find Max, given an array with multiple values

var x = [-3,3,5,7];
var max = x[0];

for(var i=1; i<x.length; i++){
    if(x[i]>max){
        max = x[i];
    }
}
console.log(max);

// Find average, given an array with multiple values

var x =[1,3,5,7,20];
var sum = 0;

for(var i=0; i<x.length; i++){
    sum = sum + x[i];
}
var average = sum/x.length;
console.log(average);


// Array with odd numbers

var y = [];
for(var i=1; i<=255; i = i+2){
    y.push(i);
}
console.log(y);

// Greater than Y

var x = [1,3,5,7];
var y = 3;

    // count = to check how many values is greater than y
var count = 0;
for(var i=0; i<x.length; i++){
    if(x[i]>y){
        count++;
    }
}
console.log(count);


// Square the values

var x =[1,5,10,-2];

for(var i=0; i<x.length; i++){
    x[i] = x[i]*x[i];
}
console.log(x);

// Eliminate Negative Numbers

var x = [1,5,10,-2];

for(var i=0; i<x.length; i++){
    if(x[i]<0){
        // replacing negative numbers with 0
        x[i] = 0;
    }
}
console.log(x);

// Max, min, and average in an array

var x = [1,5,10,-2];
var max = x[0];
var min = x[0];
var sum = sum+x[0];

for(var i=1; i<x.length; i++){
    if(x[i]>max){
        max = x[i];
    }
    if(x[i]<min){
        min = x[i];
    }
    sum = sum + x[i];
}
console.log('Max is', max);
console.log('Min is', min);
console.log('Avg is', sum/x.length);


// Shifting the values in the array
// ex: [1,5,10,7,-2] => [5,10,7-2,0]

var x = [1,5,10,7,-2];

    // x.length-1 .. to prevent getting error as it does not have indexof 5
for(var i=0; i<x.length-1; i++){
    // [1,5,10,7,-2] => [5,5,10,7,-2]
    x[i] = x[i+1]
}
// setting last index to set as 0;
x[x.length-1] = 0;
console.log(x);


// Number to string, replace negative numbers with string

var x = [-1,-3,2];

for(var i=0; i<x.length; i++){
    if(x[i]<0){
        x[i] = "Dojo";
    }
}

console.log(x);

// Create random array (10 values)

var arr = [];

for(var i=0; i<10; i++){
    var random_int = Math.floor(Math.random() * 101);
    arr.push(random_int);
}
console.log(arr);

Math.random(); // ex: 0, 0.12, 0.999
Math.random() * 100; // ex: 0 * 100 = 0; 0.9999 * 100 = 99.9999
Math.floor(Math.random()*101) // to get max number of 100 not 99



// Swapping two values;

var x = [2,3,5,7,,6];
// first drawer
var temp = x[0];
// last drawer
x[x.length-1] = temp;


// Reversing the array through swapping

var x = [-3,5,1,3,2,10];

for(var i =0; i< Math.floor(x.length/2); i++){
    var temp = x[i];
    x[i] = x[x.length-1-i];
    x[x.length-1-i] = temp;
}
console.log(x);

// x => [-3,5,1,3,2,10]
// i => 0
// temp => -3


// Insert X in Y, ex: [1,3,5,7] x=10 y=2  => [1,3,10,5,7] (adding 10 on index 2)

var arr =[1,3,5,7]
var x = 10;
var y = 2;
arr.push(0);

for(var i = arr.legnth-1; i>y; i--){
    arr[i] = arr[i-1];
}

arr[y] = x;

console.log(arr);

// arr.push(0);
// arr[arr.length-1] = arr[arr.length - 2];
// arr[arr.length-2] = arr[arr.length-3];


// Removing Negatives

var arr = [0,-1,2,-3,4,-5,6]

function removeNegatives(arr){
    var numNegatives = 0;

    for (var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            numNegatives++;
        }
        else {
            arr[i - numNegatives] = arr[i]
        }
    }

    while(numNegatives--){
        arr.pop();
    }
    return arr;
}
console.log(arr);
