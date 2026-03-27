/*Shadowing - when an inner scope variable has the same name as an outer scope variable. 
The inner variable temporarily hides or overrides the outer scope variable.*/

let a = 10

function x() {
    let a = 20;
    console.log(a) //20
}

console.log(a) //10


//Illegal Shadowing - violating shadowing rules

//1. Shadowing a let or const in the same scope

//2. Shadowing a function parameter using let or const

// function foo(c) {
//     let c = 5; //SyntaxError: Identifier 'c' has already been declared
// }