const binarySearch = (sortedArr, element, offset) => {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    while (endIndex => startIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (element == sortedArr[middleIndex]) {
            return middleIndex + offset;
        }

        if (sortedArr[middleIndex] < element) {
            startIndex = middleIndex + 1;
            offset = offset + middleIndex + 1
        } else {
            endIndex = middleIndex;
        }
        console.log(sortedArr.slice(startIndex, endIndex + 1));
        return binarySearch(sortedArr.slice(startIndex, endIndex + 1), element, offset);
    }
}

// We use THe master Theorem in order to find Time Complexity of binary-searching recursion solution algorithm

// Runtime of recursion: O(n^logb a)

// a = 1; b = 2;

// T = (n^log2 1) = n^0 = 1; O(1)

//  Some work inside and outside of recursion

// Overall algorithm time complexity: O(n^logb a * logn) => O(logn);

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(sortedArr, 10, 0));