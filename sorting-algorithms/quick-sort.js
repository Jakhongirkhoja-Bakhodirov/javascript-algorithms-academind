const quickSort = (arr) => {
    const copiedArray = [...arr];
    
    if(copiedArray.length <= 1) {
        return copiedArray;
    }
    const pivotElement = copiedArray.shift();
    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const centralElementsArray = [pivotElement];
 
    console.log('pivot-element' , pivotElement);
 
    while(copiedArray.length) {
        const currentElement = copiedArray.shift();
        if(currentElement === pivotElement) {
            console.log('else-if-central-element-array' , currentElement);
            centralElementsArray.push(currentElement);
        } else if(currentElement < pivotElement)  {
            console.log('else-if-smaller-element-array' , currentElement);
            smallerElementsArray.push(currentElement);
        } else {
            console.log('else-bigger-element-array' , currentElement);
            biggerElementsArray.push(currentElement);
        }
    }

    console.log('smaller-element-array' , smallerElementsArray);
    
    console.log('bigger-element-array' , smallerElementsArray);
    
    console.log('central-element-array' , smallerElementsArray);


    const smallerElementsSortedArray = quickSort(smallerElementsArray);
    const biggerElementsSortedArray = quickSort(biggerElementsArray);
    return smallerElementsSortedArray.concat(centralElementsArray,biggerElementsSortedArray);
}

const array = quickSort([10,-3,4,5,-6]);

console.log(array);

//Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n);    
//Algorithm runtime: O(n^logb(a) * log n) => O(n^log2(2) * log(2)) => O(n*log(2))
// Time Complexity

//Best Case 
//Items are sorted randomly (not in right or wrong order) 
//Big O(n*log n)


//Worst Case
//Items are already sorte (order does not matter) 
//Big O(n^2)

//Average Case
//Items are sorted randomly (not in right or wrong order) 
//Big O(n*log n)