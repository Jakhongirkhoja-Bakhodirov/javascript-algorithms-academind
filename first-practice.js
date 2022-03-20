//Big O equals Linear Time Complexity O(n)
function sumArray(array) {
    let result = 0;
    for(let index = 0 ; index < array.length ; index++) {
        result+=array[index];
    }
    return result;
}

// console.log(sumArray([1,2,4]));


//Max solutions
//example sumArray([1,3,5]);
function sumArray(numbers) {
    let result = 0;     // expression execute one times;
    for(const number of numbers) {   // expression execute one times;
        result+=number;  // expression execute three times;
    }
    return result;   // expression execute one times;

    // return numbers.reduce((number , curNum) => sum , 0);
}

function sumViaReduce(numbers) {
    return numbers.reduce((sum , currentNumber) => sum+currentNumber , 0);
}

// let start = 0 , end = 0;
// start = performance.now();
// sumArray([2,3,4]);
// end = performance.now();
// console.log(end-start);

let start = 0 , end = 0;
start = performance.now();
sumViaReduce([2,2,3,4]);
end = performance.now();
console.log(end-start);
// T = 1 + 1 + n + 1 = 3 + n;