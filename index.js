//Measuring algorithm Performence & Time Complexity

function sumUp(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result+i;
    }
    return result;
}

let start = 0 , end = 0;

start = performance.now();
sumUp(5);
end = performance.now();
console.log(end-start);