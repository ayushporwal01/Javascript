//Exception Handling - handling errors

//1. try-catch
try {
  // Code that might throw an error
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}