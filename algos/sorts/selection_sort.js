// Basic idea for selection sort:
// to divide the list into two portions: sorted portion and unsorted portion
// when unsorted portion is moved to sorted portion, the algo is complete.

var bigo = [5,4,3,2,1];
var bigomega =[1,2,3,4,5];

var selectionSort = function(arr) {
    for(var i = 0; i <arr.length; i++){
        console.log("Start of Big Iteration");
        console.log(arr);
        var minIndex = i;
        for(var j = i; j < arr.length; j++){
            console.log("=======small iteration");
            console.log(arr);
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            swap(arr, i, minIndex);
        }
        console.log("End of big Iteration");
        console.log(arr);
        console.log("\n\n\n\n\n");
    }
    return arr;
}

var swap = function(arr, indexOne, indexTwo){
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
 }

 console.log(selectionSort(bigo));
 console.log(selectionSort(bigomega));