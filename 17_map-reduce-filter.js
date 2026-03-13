//map - Transforms every element of an array.

const nums = [1, 2, 3, 4, 5]

const doubled = nums.map(num => num * 2)
console.log(doubled)

//filter - Selects only those elements that satisfies a given condition.

const oddNums = nums.filter((num) => num % 2 == 1)
console.log(oddNums)

//reduce - reduce the entire array to one single value.

const sum = nums.reduce((acc, num) => acc + num, 0) 
console.log(sum)