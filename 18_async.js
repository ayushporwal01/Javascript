//Callbacks - A func passed into another func as an argument to run later.

setTimeout(() => {
  console.log("Task finished");
}, 2000);

console.log("Start");


//Promises - An object that represents the eventual completion or failure of an async operation.
const promise = new Promise((resolve, reject) => {
  let success = false;

  setTimeout(() => {
    if (success) {
      resolve("Data received");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

promise
  .then(data => console.log(data))
  .catch(error => console.log(error));