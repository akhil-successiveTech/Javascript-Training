// Write a function expression that takes in another function as an argument

let num1 = 10;
let num2 = 20;

const sum = (num1, num2) => {
    let ans = num1 + num2;
    return ans;
}

const func = (paramFunction) => {
    return paramFunction(num1, num2);
}

console.log(func(sum));