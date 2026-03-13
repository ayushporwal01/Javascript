function add(a) {
    return function(b) {
        return a + b
    }
}

console.log(add(2)(3))

//Arrow Function
const add2 = a => b => c => a + b + c;
const addition = add2(2);
console.log(addition(2)(3)); 
console.log(addition(5)(6)); 