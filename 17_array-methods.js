//map - Transforms every element of an array.

const nums = [1, 2, 3, 4, 5]
const string = "leon"

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

//slice - extract a section of string and return a new string with extracted elements.
const extracted = nums.slice() 
console.log(index)

