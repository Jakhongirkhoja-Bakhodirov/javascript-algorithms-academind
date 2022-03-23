let counter = 0;
const binarySearch = (sortedArr, element) => {
    let startIndex = 0; // 1
    let endIndex = sortedArr.length - 1; // 1

    while (endIndex => startIndex) {
        counter++;
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (element == sortedArr[middleIndex]) {
            return middleIndex; // 1
        }

        if (sortedArr[middleIndex] < element) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
}

// The Best Case: T = O(1) when element is located in the right of middle the sorted array that is index 0;
// The Average Case: T = O(logn) when element is not located in neither the end nor beggining of the sorted array
// The Worst Case: T = O(logn) when element is located either the end or the beggining of the sorted array
const sortedArr = [-3, 4, 7, 10, 18, 30, 40, 50, 66];
console.log(binarySearch(sortedArr, 66));
console.log(counter);