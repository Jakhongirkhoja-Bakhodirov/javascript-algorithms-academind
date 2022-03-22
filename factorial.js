// const factorial = (number) => {
//     let result = 1;  // 1
//     for (let i = 2; i < number+1; i++) { // 1
//         result*=i;    // n - 1
//     }
//     return result;  // 1
// }

// // T = 1 + 1 + n - 1 + 1 = 2 + n => Big O(n);
// let start = 0 , end = 0;
// start = performance.now();
// console.log(factorial(1));
// end = performance.now();
//console.log(`Call to isPowerOfTwo took ${end - start} milliseconds.`);

const factorial = (number) => {
    if(number <= 1) {  // 1
        return 1; // 1
    }
    return factorial(number-1) * number; // 1  
}

// In every function call => O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(1) => O(n);

console.log(factorial(5));