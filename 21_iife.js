//IIFE - Immediately Invoked Function Expression
//Runs immediately after it is defined.

(function() {
    let message = "Hello, world!";
    console.log(message);
})();

//Used to avoid polluting global scope.
//Encapsulate variables and logic.
//Useful in modules, libararies or temporary code.