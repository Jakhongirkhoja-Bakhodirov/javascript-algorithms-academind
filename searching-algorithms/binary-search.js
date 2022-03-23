let counter = 0;
const binarySearch = (sortedArr , element) => {
    let startIndex = 0;    // 1
    let endIndex = sortedArr.length - 1;   // 1

    while (endIndex => startIndex) {
        counter++;
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);  
        if(element == sortedArr[middleIndex]) { 
            return middleIndex;  // 1
        }

        if(sortedArr[middleIndex] < element) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
}
const sortedArr = [-3,4,7,10,18,30,40,50,66];
console.log(binarySearch(sortedArr,66));
console.log(counter);