function add(a) {
    return function(b) {
        return a + b
    }
}

console.log(add(2)(3))

//Arrow Function
const add = a => b => a + b;

console.log(add(2)(3)); // 5