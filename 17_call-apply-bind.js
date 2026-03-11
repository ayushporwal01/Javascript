//call - invokes the function immediately and lets you set the value of this. 

const person = {
  name: "Rahul"
};

function greet(age) {
  console.log("Hello " + this.name + ", age " + age);
}

greet.call(person, 21);