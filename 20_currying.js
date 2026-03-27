// /*Currying is the process of transforming a function that takes multiple arguments into a 
// sequence of functions, each taking one argument at a time.*/

//Using bind
let multiply = function(x, y) {
   console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

//Using Function Closures

let add = function(a) {
    return function(b) {
        return a + b
    }
}

add(2, 3)

//Arrow Function
let add2 = () => a => b => a + b;
add2(5, 6)

//a = 2 is fixed now
const add3 = a => b => c => a + b + c;
const addition = add3(2);
console.log(addition(2)(3)); 
console.log(addition(5)(6)); 