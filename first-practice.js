//Big O equals Linear Time Complexity O(n)
function sumArray(array) {
    let result = 0;
    for(let index = 0 ; index < array.length ; index++) {
        result+=array[index];
    }
    return result;
}

console.log(sumArray([1,2,4]));
