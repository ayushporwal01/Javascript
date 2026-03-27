//call, apply, bind 
//They are used to control the value of "this" when calling functions.

//1. call - Invokes a func with a specified this value & arguments passed individually
//Runs Immediately
//Arguments are passed individually
//Returns Nothing

let name = {
  firstName: "Ayush",
  lastName: "Porwal"
}

let printFullName = function(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state)
}

printFullName.call(name, "Indore", "Madhya Pradesh")

//2. apply - Invokes a func with a specified this value and arguments passed as an array.

// const person2 = {
//   name: "Rahul"
// };

// name2.apply(person2, [21, "Delhi"]);


//3. bind - Returns a new function with a fixed this context that can be called later.
//Doesn't run immediately
//Returns a new function
//You call it later

// const person3 = {
//   name: "Rahul"
// };

// function greet3() {
//   console.log("Hello " + this.name);
// }

// const greetPerson = greet3.bind(person3);

// greetPerson();