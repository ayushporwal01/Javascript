//Default Parameter - A value that a function uses if no argument is provided during the function call.

function greet(name = "Bhai") {
  console.log(`Hello, ${name}!`);
}

greet("Ayush"); // Hello, Ayush!
greet();        // Hello, Guest!