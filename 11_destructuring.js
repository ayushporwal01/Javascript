//Destructuring - Extracting values and assigning them in single statement

//Array Destructuring
const numbers = [10, 20, 30]
const [firstNum, secondNum, thirdNum] = numbers

console.log(firstNum)
console.log(thirdNum)

//Object Destructuring
const person = {
    name: "Ayush",
    age: 21,
}

const {name, age} = person

console.log(name)
console.log(age)