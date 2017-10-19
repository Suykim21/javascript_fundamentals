// // Worst case scenario - linear
// // [5, 4, 3, 2, 1]

// var bigo = [5, 4, 3, 2, 1];
// var bigomega = [1, 2, 3, 4, 5];

// // Pattern is 4+3+2+1

// var bubbleSort = function(arr) {
    // arr.length-1 => because we dont need to bubble up last element
//     for(var i = 0; i <arr.length-1; i++){
//         console.log("Start of Big Iteration #", i);
//         console.log(arr);
//         // bubble up the element
//         // j<arr.length-1-i - bubble up the element one less time
//         // ex: [4,3,2,1,5] - we know last index has the largest value, therefore we start check till index of 3 not 4.
//         for(var j = 0; j<arr.length-1-i; j++) {
//             console.log("========small iteration #", i);
//             console.log(arr);
//             if(arr[j] > arr[j+1]){
//                 swap(arr, j, j+1);
//             }
//         }
//         console.log("End of big Iteration # " + i);
//         console.log(arr);
//         console.log("\n\n\n\n\n\n");
//     }
//     return arr;
// }

// var swap = function(arr, indexOne, indexTwo) {
//     var temp = arr[indexOne];
//     arr[indexOne] = arr[indexTwo];
//     arr[indexTwo] = temp;
// }

// console.log("WORST CASE SCENARIO FOR FIRST BUBBLE");
// console.log(bubbleSort(bigo));
// console.log("\n\n\n\n\n");

// console.log("BEST CASE SCENARIO FOR FIRST BUBBLE");
// console.log(bubbleSort(bigomega));
// console.log("\n\n\n\n\n");


// Optimization - bubble sort
// Worst case 
//  4 + 3 + 2 + 1
//  n + n-1 + n-2 ...1
// n(n-1)/2

// Best case
// n - 1

var bigo = [5, 4, 3, 2, 1];
var bigomega = [1, 2, 3, 4, 5];

var betterBubble  = function(arr) {
    var count = 0;
    do {
        var swapping = false;

        console.log("Start of Big Iteration #", count);
        console.log(arr);

        // bubble up the element
        // count - do bubble sort one less time after each iteration
        for(var i = 0; i<arr.length - 1 - count; i++){
            if(arr[i]>arr[i+1]){
                swap(arr, i, i+1);
                swapping = true;
            }
        }

        console.log("End of big Iteration # " + count);
        console.log(arr);

        count++;

        console.log("\n\n\n");
    } while (swapping === true)
    return arr;
}

var swap = function(arr, indexOne, indexTwo) {
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}

console.log("WORST CASE SCENARIO FOR FIRST BUBBLE");
console.log(betterBubble(bigo));
console.log("\n\n\n\n\n");

console.log("BEST CASE SCENARIO FOR FIRST BUBBLE");
console.log(betterBubble(bigomega));
console.log("\n\n\n\n\n");