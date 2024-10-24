// TODO-1 

let a = 10;
let b = 5;

let addNum = a+b;
let sub = a-b;
let multi = a*b;
let divide = a/b;
console.log(addNum);
console.log(sub);
console.log(multi);
console.log(divide);

// TODO-2 


let celsius = 24;


let fahrenheit = (celsius*9/5) + 32;


console.log(fahrenheit);


// TODO-3 


let number = prompt("Enter a number:");



number = Number(number);


if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}


// TODO-4 

let marks = prompt("Enter your marks:");


marks = Number(marks);


if (marks >= 90) {
    console.log("A");
} else if (marks >= 80 && marks <= 89) {
    console.log("B");
} else if (marks >= 70 && marks <= 79) {
    console.log("C");
} else if (marks >= 60 && marks <= 69) {
    console.log("D");
} else {
    console.log("F");
}


// TODO-5 



let evenOrOdd = 7;


if (evenOrOdd % 2 === 0) {
    console.log(`${evenOrOdd} is Even.`);
} else {
    console.log(`${evenOrOdd} is Odd.`);
}
