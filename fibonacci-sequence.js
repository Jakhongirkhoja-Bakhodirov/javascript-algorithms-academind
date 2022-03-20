const fibonacciSequence = (n) => {
    let numbers = [1,1];  // 1
    for(let i = 2 ; i < n + 1; i++) { // 1
        numbers.push(numbers[i-2] + numbers[i-1]); // n-1
    }
    return numbers[n]; // 1
}

// T = 1 + 1 + n - 1 + 1 = 2 + n => Big O(n)
console.log(fibonacciSequence(4));