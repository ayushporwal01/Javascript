//call - Invokes the function immediately and lets you set the value of this. 
//Runs Immediately
//Arguments are passed separately

const person = {
  name: "Rahul"
};

function greet(age) {
  console.log("Hello " + this.name + ", age " + age);
}

greet.call(person, 21);


//apply - Almost the same as call(), but it passes arguments as an array.
//Arguments are passed as an array

const person2 = {
  name: "Rahul"
};

function greet2(age, city) {
  console.log(this.name + " is " + age + " from " + city);
}

greet2.apply(person2, [21, "Delhi"]);


//bind - It does NOT run the function immediately.
//It returns a new function with - this fixed.
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