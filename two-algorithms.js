const minValueOfArray = (numbers) => {
    let minNumber = numbers[0]; // 1
    for(number of numbers) {  // 1
        if(minNumber > number) {
            minNumber = number  // n 
        }
    }
    return minNumber; // 1
}

// T = 1 + 1 + n + 1 = 3 + n => O(n);

const isEvenNumber = (number) => {
    return number % 2 == 0
}

// T = 1 + 1 + 1 = 3 => O(1);

console.log(minValueOfArray([3,2,-3]));
console.log(isEvenNumber(21));