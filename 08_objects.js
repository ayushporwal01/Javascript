let person = {
    name: "Ayush",
    age: 21,
    city: "Indore"
}

console.log(person)

//Access
console.log(person.name)
console.log(person.age)
console.log(person["city"])

//Add & Update
person.country = "Japan"
person.city = "Tokyo"
console.log(person)

//Delete
delete person.city
console.log(person)

//Loop Through an Object
for(let key in person) {
    console.log(key, person[key])
}

//Methods
let student = {
    name: "Rahul",
    greet() {
        console.log("Hello " + this.name)
    }
}

student.greet()

//Nested Objects
let empoloyee = {
    name: "Andrew",
    address: {
        city: "New York",
        country: "United States"
    }
}