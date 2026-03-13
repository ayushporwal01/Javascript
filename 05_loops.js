//For Loop
for(let i = 1; i <= 5; i++) {
    console.log(i)
}


//While Loop
let i = 1
while(i <= 5){
    if(i == 3) break
    console.log(i)
    i += 1
}


//Do-while
i = 1

do {
  if(i == 3) {
    i++
    continue
  }
  console.log(i)
  i++
}
while(i <= 5)


//For Each - Used to loop each element of an array and execute a func for every item.
const games = [
  {
    genre: "Story",
    titles: ["Red Dead Redemption 2", "Ghost of Tsushima", "Witcher 3", "The Last of Us Part I"]
  },
  {
    genre: "Horror",
    titles: ["Resident Evil Requiem", "Visage", "Outlast Trials", "Pacify"]
  },
  {
    genre: "Choice-Based",
    titles: ["Resident Evil Requiem", "Visage", "Outlast Trials", "Pacify"]
  }
];


//For Of - Used to loop through arrays or iterable values.
let arr = [10, 20, 30]

for(let value of arr){
  console.log(value)
}


//For In - Used to loop through object properties.
let person = {
  name: "Rahul",
  age: 20
};

for(let key in person){
  console.log(key, person[key])
}
