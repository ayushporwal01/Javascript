/*Shadowing - when an inner scope variable has the same name as an outer scope variable. 
The inner variable temporarily hides the outer variable inside its scope.*/


let a = 10

function x() {
    let a = 20;
    console.log(a) //20
}

console.log(a) //10