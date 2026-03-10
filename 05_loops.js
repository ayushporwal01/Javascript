//For Loop
for(let i = 1; i <= 5; i++) {
    console.log(i)
}

//While Loop
let i = 1
while(i <= 5){
    console.log(i)
    i += 1;
}

//Do-while
i = 1

do {
   console.log(i);
   i++
}
while(i <= 5)

//For Of - Used to loop through arrays or iterable values.
let arr = [10, 20, 30];

for(let value of arr){
  console.log(value);
}

//For In - Used to loop through object properties.
let person = {
  name: "Rahul",
  age: 20
};

for(let key in person){
  console.log(key, person[key]);
}