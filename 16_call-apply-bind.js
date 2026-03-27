//call, apply, bind 
//They are used to control the value of "this" when calling functions.

//1. call - Invokes a func with a specified this value & arguments passed individually
//Runs Immediately
//Arguments are passed individually
//Returns Nothing

//2. apply - Invokes a func with a specified this value and arguments passed as an array.

//3. bind - Returns a new function with a fixed this context that can be called later.
//Doesn't run immediately
//Returns a new function
//You call it later

let name = {
  firstName: "Ayush",
  lastName: "Porwal"
}

let printFullName = function(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state)
}

printFullName.call(name, "Indore", "Madhya Pradesh")
printFullName.apply(name, ["Indore", "Madhya Pradesh"])
printFullName.bind(name, ["Indore", "Madhya Pradesh"])

