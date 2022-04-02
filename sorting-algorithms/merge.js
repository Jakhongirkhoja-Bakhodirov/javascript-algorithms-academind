const mergeSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }

    if(arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1],arr[0]] : arr
    }

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0,middle);
    const rightArray = arr.slice(middle);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    //Merging Logic
    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while (
        leftArrayIndex < leftSortedArray.length || 
        rightArrayIndex < rightSortedArray.length
    ) {
        if(leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
            mergedArray.push(rightSortedArray[rightArrayIndex]);
            rightArrayIndex++;
        } else {
            mergedArray.push(leftSortedArray[leftArrayIndex]);
            leftArrayIndex++;
        }
    }
    return mergedArray;
}

const sortedArray = mergeSort([-10,33,5,10,3,-19,-99,100])

console.log(sortedArray);

// Time Complexity Merge Sorting Algorithm
// All the cases are equal time complexity , time complexity comes from The Master Theorem

// Recursive Step Time Complexity: O(n^logb (a)) => O(n^log2(2)) => O(n)
// Work inside and outside of recursion: O(n^logb(a) * log(n)) => O(n * logn); 
// Algorithm Time Complexity: O(n*log(n)); 
// a = 2 because a is number of recursive calls 
//b = 2 because we're dividing the array two parts and this is reduction per split

// Best Case 
// Items are sorted randomly => Big O(n*log(n));

// Average Case 
// Items are sorted randomly => Big O(n*log(n));

// Worts Case 
// Items are sorted randomly => Big O(n*log(n));