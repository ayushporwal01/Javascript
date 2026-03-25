//map - Transforms every element of an array.

const nums = [1, 2, 3, 4, 5]
const name = "leon.s.kennedy"
const str = "graceashcroft"

const doubled = nums.map(num => num * 2)
console.log(doubled)

//filter - Selects only those elements that satisfies a given condition.

const oddNums = nums.filter((num) => num % 2 == 1)
console.log(oddNums)

//reduce - reduce the entire array to one single value.

const sum = nums.reduce((acc, num) => acc + num, 0) 
console.log(sum)

//find - returns the first element that satisfies the condition.

const ele = nums.find(x => x > 2) 
console.log(ele)

//findIndex - returns the first index of the element that satisfies the condition.

const index = nums.findIndex(x => x == 2) 
console.log(index)

//slice - Returns a new string with elements in the specified range excluding the last element.
const extracted = name.slice(0, -1) 
console.log(extracted)

//splice - Returns a new array with extracted elements and modifies the original array.
const spliced = nums.splice(3) 
console.log(spliced)
console.log(nums)

//split - Divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array. 
//It does not change the original string.
const splitted = name.split(".") 
console.log(splitted)
console.log(name)

//join - Creates and returns a new string by concatenating all elements of an array.
const joined = str.split("").join(" ") 
console.log(joined)
console.log(str)

