const bubbleSort = (arr) => {
    const resultArray = [...arr];

    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerElement = resultArray[outer];
        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerElement = resultArray[inner];
            if (resultArray[outer] < resultArray[inner]) {
                resultArray[outer] = innerElement;
                resultArray[inner] = outerElement;

                outerElement = resultArray[outer];
                innerElement = resultArray[inner];
            }
        }
    }
    return resultArray;
}

const arr = [4, 5, 1, -7, 3, 10, 11];

console.log(bubbleSort(arr)); 

//Time Complexity 
// Best Case => When a array is sorted by default => Big O(n)
// Average Case => When a array's elements is random order => Big(n^2)
// Worst Case => When a array is sorted in wrong order => Big(n^2)
