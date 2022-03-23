const linearSearch = (arr,element , comparisionFn) => {
    for(let i = 0 ; i < arr.length ; i++) {
        if(typeof element === 'object' && element != null && comparisionFn(element,arr[i])) {
            return i;
        }
        if(arr[i] === element) {
            return i;
        }
    }
    return false;
}

const arr = [4,5,1,-7,3,10,11];

console.log(linearSearch(arr,40));

let object = [
    {
        name:"Max",
        age:31
    }
]

// console.log(linearSearch(object,{name:"Max" , age:321}));

console.log(linearSearch(object,{name:"Max" , age:31},function(element,item) {
    return element.name === item.name && element.age === item.age;
}));