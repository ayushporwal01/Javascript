//Spread Operator(...) - used to expand an array or obj into individual elements.

//Arrays
const nums = [1, 7, 69]
const nums2 = [...nums, 4, 88]

console.log(nums2)

//Objects
const person = {name: "Ayush", age: 21}
const person2 = {...person, city: "Miami"}

console.log(person2)


//Rest Operator(...) - used to collect multiple elements into a single array or object.