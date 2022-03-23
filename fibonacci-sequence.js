let counter1 = 0;
const fibonacciSequence = (n) => {
  
    let numbers = [1,1];  // 1
    for(let i = 2 ; i < n + 1; i++) { // 1  
        counter1++
        numbers.push(numbers[i-2] + numbers[i-1]); // n-1
    }
    return numbers[n]; // 1
}

// T = 1 + 1 + n - 1 + 1 = 2 + n => Big O(n)
// console.log(fibonacciSequence(40));

// Recursion is not always the best solution!

const memo = {};
let counter = 0;
const fibonacciSequenceSolvedRecursion = (number , memo) => {
    counter++;
    let result;
    if(memo[number]) {
        return memo[number];
    }
    if(number == 1 || number == 0) {
        result = 1;
    } else {
        result=fibonacciSequenceSolvedRecursion(number-1 , memo) + fibonacciSequenceSolvedRecursion(number-2 , memo)
    }
    memo[number] = result;
    return result;
}
// Loop-based solution => Exponential time complexity (T) => Big O(n)
// Recursion based solution => T = n^2 => Big O(n^2)

//console.log(fibonacciSequenceSolvedRecursion(5 , {}));
fibonacciSequenceSolvedRecursion(5,{});
console.log(counter);
counter = 0;

// //console.log(fibonacciSequenceSolvedRecursion(10 , {}));
// fibonacciSequenceSolvedRecursion(10,{});
// console.log(counter);
// counter = 0;

// //console.log(fibonacciSequenceSolvedRecursion(100 , {}));
// fibonacciSequenceSolvedRecursion(100,{});
// console.log(counter);
// counter = 0;


// //console.log(fibonacciSequenceSolvedRecursion(1000 , {}));
// fibonacciSequenceSolvedRecursion(1000 , {});
// console.log(counter);
// counter = 0;

// fibonacciSequence(5);
// console.log(counter1);
// counter1 = 0;

// //console.log(fibonacciSequence(10 , {}));
// fibonacciSequence(10);
// console.log(counter1);
// counter1 = 0;

// //console.log(fibonacciSequence(100 , {}));
// fibonacciSequence(100);
// console.log(counter1);
// counter1 = 0;


// //console.log(fibonacciSequence(1000 , {}));
// fibonacciSequence(1000);
// console.log(counter1);
// counter1 = 0;