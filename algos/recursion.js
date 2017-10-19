// Summing values through recursion
// rSum(5) will return the result of 5 + 4 + 3 + 2 + 1
// recursion: rSum(5) == 5 + rSum(4)
function rSum(n){
    if (n === 1) {
        return 1;
    } else {
        return rSum(n-1) + n;
    }
}

// Sum without recursion
function iSum(n){
    var sum = 0
    for(var i =1; i <=num; i++){
        // sum = sum + i;
        sum += i
    }
    return sum;
}


// Factorial without recursion 
// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

function iterativeFactorial(n) {
    var multiplier = 1;
    for(var i = 1; i <=n; i++){
        // multiplier = multiplier * i
        multiplier *= i
    }
    return multiplier
}

// Recursive Factorial

function recursiveFactorial(n) {
    if(n ==1){
        return 1;
    } else {
        return n * recursiveFactorial(n-1);
    }
}

// Fibonacci 
// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

function iterativeFibonacci(n){
    var fibs = [0,1];

    for(i=0; i<n; i++){
        // console.log(fibs[0]+fibs[1]);
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
    }
    console.log(fibs[0]);
}

iterativeFibonacci(4)

// Fibonacci Recursion
// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8

function recursiveFibonacci(n) {
    if(n==1 || n==2){
        return 1;
    } else {
        return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
    }
}