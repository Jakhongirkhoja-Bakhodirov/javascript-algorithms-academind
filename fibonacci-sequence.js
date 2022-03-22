const fibonacciSequence = (n) => {
    let numbers = [1,1];  // 1
    for(let i = 2 ; i < n + 1; i++) { // 1
        numbers.push(numbers[i-2] + numbers[i-1]); // n-1
    }
    return numbers[n]; // 1
}

// T = 1 + 1 + n - 1 + 1 = 2 + n => Big O(n)
console.log(fibonacciSequence(40));

// Recursion is not always the best solution!

const fibonacciSequenceSolvedRecursion = (number) => {
    if(number == 1 || number <= 0) {
        return 1;
    }
    console.log('called');
    return fibonacciSequenceSolvedRecursion(number-1) + fibonacciSequenceSolvedRecursion(number-2)
}
// Loop-based solution => Exponential time complexity (T) => Big O(n)
// Recursion based solution => T = n^2 => Big O(n^2)
console.log(fibonacciSequenceSolvedRecursion(40));