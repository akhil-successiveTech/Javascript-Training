// Write a function expression that takes in two numbers and returns their sum.

let num1 = parseInt(prompt("Enter a number 1: "));
let num2 = parseInt(prompt("Enter a number 2: "));

const sum = (num1, num2) => {
    let ans = num1 + num2;
    return ans;
}

console.log("Sum of number 1 and number 2: " + sum(num1, num2));