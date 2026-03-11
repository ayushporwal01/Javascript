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