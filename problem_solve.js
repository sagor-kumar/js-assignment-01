// variables problems

// problem 1
var name = "John";
console.log("Hello, " + name + "!");

// problem 2
let a, b;
a = 5;
b = 10;
result = a + b;
console.log(result);

// problem 3
let age = 25;
console.log("My age is " + age);

// problem 4
const math = 65, english = 70, physics = 80;
let total = math + english + physics;
let average = total / 3;
console.log("Total: " + total);
console.log("Average: " + average);

// problem 5
let firstName = "Sagor";
let lastName = "Kumar";
let job_title = "Front-End Developer";
let company_name = "Future Tech";
console.log(firstName + " " + lastName + " is a " + job_title + " at " + company_name);


// string method problems

// problem 1
let sentence = "Say, hello to the World!"
let word = "Hello";
let searchFor = sentence.search(word);

if (searchFor != -1) {
    console.log(`The word ${"'" + word + "'"} has been found!`);
} else {
    console.log(`The word ${"'" + word + "'"} has not been found!`);
}

// problem 2
let userNameInput = prompt("Write Your Name Here:");
let userNameOutput = userNameInput.trim();
let greeting = "Hello,";
let display = greeting.concat(" ", userNameOutput);

console.log(display);


// problem 3
let pLanguage, learnersName, startingYear, message;
pLanguage = "JavaScript";
learnersName = "Sagor";
startingYear = "2024";

message =
`${learnersName}, 
you have been learning ${pLanguage} 
since ${startingYear}`;

console.log(message);

// problem 4
let email = "EXAMPLE@YaHOO.com";
let yahoo = "@yahoo.com";
email = email.toLowerCase();
yahoo = yahoo.toLowerCase();

let isYahoo = email.includes(yahoo);

if (isYahoo == true) {
    console.log("This is a yahoo mail");
} else {
    console.log("This is not a yahoo mail");
}


// problem 5
let theNumber = 81;
let theDivisor = 10;
let isDivisible = theNumber % theDivisor;

(isDivisible == 0) ? console.log("Division Successfull!") : console.log("Division is not successfull!");

// problem 6
let inputNum = 15;
let checkingNum = 2;
let evenOrOdd = inputNum % checkingNum;

(evenOrOdd == 0) ? console.log(`The number ${inputNum} is an 'Even' number!`) : console.log(`The number ${inputNum} is an 'Odd' number!`);


// problem 7
let userInput = -500;
console.log(`The data type is: ${typeof userInput}`);