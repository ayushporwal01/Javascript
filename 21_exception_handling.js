//Exception Handling - handling errors

//1. try-catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}