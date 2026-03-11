//Template Literals - embed variables in strings
let name = "Harry"
console.log(`Hello ${name}`)

//Destructuring - extract values and assign them in single statement

//Array Destructuring
const numbers = [10, 20, 30]
const [firstNum, secondNum, thirdNum] = numbers

console.log(firstNum)
console.log(thirdNum)

//Object Destructuring
let person = {
    name: "Ayush",
    age: 21,
}

const {firstName, myAge} = person

console.log(firstName)
console.log(myAge)