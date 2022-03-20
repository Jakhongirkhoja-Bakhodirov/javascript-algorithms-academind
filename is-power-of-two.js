const isPowerOfTwo = (number) => {
    if(number < 1) {
        return false;
    }

    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if(dividedNumber % 2 !== 0) {
            return false;
        }
        dividedNumber = dividedNumber/2;
    }
    return true;
}

// Best Case:number is add number => Big O(1);
// Average Case: O(n)
// Worst Case: if number is million or something like that devided two many times exp:10000000 => Big O(log n)

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(18));
// console.log(isPowerOfTwo(88));

let start = 0;
let end = 0;
start = performance.now();
console.log(isPowerOfTwo(1000000000000));
end = performance.now();

console.log(`Call to isPowerOfTwo took ${end - start} milliseconds.`);