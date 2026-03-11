let person = {
    name: "Ayush",
    age: 21,
    city: "Indore"
}

console.log(person)

//Accessing Properties
console.log(person.name)
console.log(person.age)
console.log(person["city"])

//Adding & Updating Properties
person.country = "Japan"
person.city = "Tokyo"
console.log(person)

//Deleting Properties
delete person.city
console.log(person)
