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

//Async-Await - keywords used to handle async tasks.
//async - Adding async before a function declaration makes it return a promise automatically.
//await - It pauses the execution of the async function until a promise is resolved or rejected.
//async-await is just a syntactic sugar over promises.

async function getData() {
  const response = await fetch("https://api.github.com/users/ayushporwal01");
  const data = await response.json();
  console.log(data);
}

getData();