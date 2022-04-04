const cartProduct = (setA , setB) => {
    const products = [];

    for(const setAEl of setA) {
        for(const setBEl of setB) {
            products.push([setAEl,setBEl])
        }
    }
    return products;
}

const colors = ['blue' , 'red' , 'green'];
const sizes = ['m','l','s'];

console.log(cartProduct(colors,sizes));

// Time Complexity
//Big O(n*m) there are n size of SetA and m size of SetB

//Space Complexity: O(n*m)