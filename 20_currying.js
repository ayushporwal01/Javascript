// /*Currying is the process of transforming a function that takes multiple arguments into a 
// sequence of functions, each taking one argument at a time.*/

//Using bind
let multiply = function(x, y) {
   console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

//Using Function Closures