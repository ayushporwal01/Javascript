//Exception Handling - handling errors

//1. try-catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
    console.log("This always runs");
}

//2. Throwing Manual Exceptions
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error("Error:", err.message);
}