const isPrime = (number) => {
    for(let i = 2; i < Math.sqrt(number) ; i++) {
        if(number%i === 0) {
            return false;
        }
    }
    return true;
}

// Big O Best , Average , Worst Cases
//Best Case: number = 1 OR number = 2 => O(1);
//Average Case: O(n);
//Worst Case: number = 100000 => O(n) but actually this is not the worst case.
//If the number is decimal like 27.923 it will be the worst case in our isPrime() method; (Improved: O(sqrt(n)))

console.log(isPrime(5));
console.log(isPrime(6));