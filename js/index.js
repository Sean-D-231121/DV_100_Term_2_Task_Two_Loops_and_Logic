// Exercise 1
let users = [
  "Jim",
  "Mike",
  "Dave",
  "Josh",
  "Tim",
  "Jane",
  "Susan",
  "Haley",
  "Matthew",
  "John",
  "Spencer",
  "Stephan",
  "Mable",
  "Steve",
  "Jacob",
  "Ruby",
  "Adam",
  "Bruce",
];
let stevePresent = false;
for (let i = 0; i <= users.length; ++i){
    if (users[i] === "Steve" || "steve"){
        stevePresent = true;
        break
    }
    
}
if (stevePresent === true) {
  console.log("Yes, Steve is present");
} else {
  console.log("No, Steve is not present");
}

//Exercise 2
let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500; 
let totalPower = 50;

for (let i = 0; i < computers.length; i++){
    totalPower += computers[i];
}
if(totalPower >= requiredPower){
    console.log("There is enough power!")
}else{
    console.log("There is not enough power! ")
}

//Exercise 3
for (let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}


//Exercise 4
let marks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];
let total = 0
let average = 0
for (let i = 0; i < marks.length; i++){
    total += marks[i]
}
average = total/marks.length
console.log("The average is "+ average )

let ageOne = 23;
let userOne = "Josh";

let ageTwo = 16;
let userTwo = "Jacob";

// Exercise 5
if(userOne === "Josh" && ageOne > 18){
    console.log("User and Age Match");
}else{
    console.log("User and Age Do Not Match");
}

if (userTwo === "Peter" || ageTwo < 18) {
  console.log("User is Younger than 18 or is Peter");
} else {
  console.log("User is Younger than 18 and is Not Peter");
}
