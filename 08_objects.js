let person = {
    name: "Ayush",
    age: 21,
    city: "Indore"
}

console.log(person)

//Accessing
console.log(person.name)
console.log(person.age)
console.log(person["city"])

//Adding & Updating
person.country = "Japan"
person.city = "Tokyo"
console.log(person)

//Deleting
delete person.city
console.log(person)
