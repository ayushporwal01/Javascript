//call, apply, bind 
//They are used to control the value of "this" when calling functions.

//1. call - Invokes a func with a specified this value & arguments passed individually
//Runs Immediately
//Arguments are passed individually
//Returns Nothing

const person = {
  name: "Rahul"
};

function greet(age) {
  console.log("Hello " + this.name + ", age " + age);
}

greet.call(person, 21);


//2. apply - Invokes a func with a specified this value and arguments passed as an array.

const person2 = {
  name: "Rahul"
};

function greet2(age, city) {
  console.log(this.name + " is " + age + " from " + city);
}

greet2.apply(person2, [21, "Delhi"]);


//3. bind - Returns a new function with a fixed this context that can be called later.
//Doesn't run immediately
//Returns a new function
//You call it later

const person3 = {
  name: "Rahul"
};

function greet3() {
  console.log("Hello " + this.name);
}

const greetPerson = greet3.bind(person3);

greetPerson();