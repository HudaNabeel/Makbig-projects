// day 1
// task-1

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// let add = num1 + num2;
// let subtract = num1 - num2;
// let multiply = num1 * num2;
// let divide = num1 / num2;

//  console.log("Addition:", add(num1, num2));
// console.log("Subtraction:", subtract(num1, num2));
// console.log("Multiplication:", multiply(num1, num2));
// console.log("Division:", divide(num1, num2));

// task-2

// task-3
// let usd = Number(prompt("Enter amount in USD:"))
// let inr = usd * 83;

// alert(`$${usd} = $${inr}`);

// revise:
// const add = (a,b) => a + b;
// const subtract = (a,b) => a - b;
// const multiply = (a,b) => a * b;
// const divide = (a,b) => a / b;

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

//  console.log("Addition:", add(num1, num2));
// console.log("Subtraction:", subtract(num1, num2));
// console.log("Multiplication:", multiply(num1, num2));
// console.log("Division:", divide(num1, num2));




// day 2
// task-1
// let secret = 4;
// let guess = Number(prompt("guess a number"));

// if(guess === secret){
//     alert("Correct");
// }else {
//     alert("Wrong! The number was " + secret);
// }

// task-2
// let secret1 = 4;
// let guess1 = Number(prompt("guess a number(1-10):"));

// if(guess1 === secret1){
//     console.log("Correct");
// }else {
//     console.log("Wrong! The number was " + secret);
// }
// task-3

// task-4
// let weekDay = Number(prompt("Enter a number (1-7):"));
// if (weekDay === 1){
//     console.log("Sunday")
// }else if (weekDay === 2){
//     console.log("monday")
// }else if(weekDay === 3){
//     console.log("Tuesday")
// }else if(weekDay === 4){
//     console.log("Wednesday")
// }else if(weekDay === 5){
//     console.log("Thursday")
// }else if(weekDay === 6){
//     console.log("Friday")
// }else if (weekDay === 7){
//     console.log("Saturday")
// }
// else{
//     console.log("Invalid day")
// }
// Revise:

// let weekDay = 4;
// switch(weekDay){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monady");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//         default:
//             console.log("Invalid day");
   
// }

// day 3
// task-1


// task-2
// let sum = 0;
// for ( let i = 1; i <= 100 ; i ++){
//     if(i % 2=== 0){
//         sum+=i;
//     }
// }
// console.log("Sum of even numbers 1-100:", sum);

// task-3
// let arr = [1,2,3,4,5];
// let reversed = [];

// for (let i = arr.length - 1; i>= 0; i--){
//   reversed.push(arr[i]);
// }

// console.log("Original", arr);
// console.log("Reversed", reversed);

// revise:

// day 4
// task-1
// task-2
// task-3
// task-4

// day 5
// task-1
// let person = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "traveling", "swimming"],
// };
// console.log(person)
// Revise:
// let person = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "traveling", "swimming"],
// };

//  revise:


// let jsonData = JSON.stringify(person);

// localStorage.setItem("person", jsonData);

// let stored = localStorage.getItem("person");

// let item = JSON.parse(stored);
// console.log(item.name);
// console.log(item.hobbies[1]);



// day 6 
// task-1




// day 7
// task-1
// let form = document.getElementById("loginForm");
// let status = document.getElementById("status");

// // revise: prevent form submission
// form.addEventListener("submit", function(event){
// event.preventDefault();



// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;

// if (email === " " && password ===  " "){
//     status.innerText = "All fields are required";
//     status.style.color = "red";
// } else {
//     status.innerText = "Login Successful";
//     status.style.color = "green";
// }



// })


// week 3  day 8:
// let colors = ["red", "green", "blue", "yellow", "purple"];


// let fruits = [...colors];

// console.log(fruits);


// let student1 = {
//     name: "Alice",
//     marks: 85,
// }

// let student2 = { ...student1};

// student1.name = "Sarah";

// console.log(student1.name);
// console.log(student2.name);

// object destructuring:

// let user = {
//     name: "john",
//     age:25,
//     company: "gfg",
// }

// let {name,age, company} = user;

// console.log(name);
// console.log(age);
// console.log(company);

