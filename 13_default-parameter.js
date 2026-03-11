//Default Parameter - A value that a function uses if no argument is provided during the function call.

function greet(name = "Bhai") {
  console.log(`Hello, ${name}!`);
}

greet("Ayush"); // Hello, Ayush!
greet();        // Hello, Bhai!

//Multiple
function describePeple(name = "Unknown", age = 0) {
    console.log(`${name} is ${age} years old.`)
}

describePeple("John", 25) //John is 25 years old
describePeple("Rahul") //Rahul is 0 years old
describePeple() //Unknown is 0 years old