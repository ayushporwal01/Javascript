let arr = [10, "Hello", true]
console.log(arr)

//Accessing
console.log(arr[1])

//Updating
arr[2] = false
console.log(arr)

//Length
console.log(arr.length)

//Methods
arr.push(30)        //add at end
console.log(arr)

arr.unshift(5)      //add at beginning
console.log(arr)  

arr.pop()
console.log(arr)    //removes last

arr.shift()
console.log(arr)    //removes first 


//Loop Through Array
let arr2 = [1, 3, 5, 7, 9]
console.log(arr2.join(" ")); //join converts array into a string with spaces b/w elements