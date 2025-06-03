// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

let num1 = parseInt(prompt("Enter a number 1: "));

const evenOdd = (num1) => {
    if(num1%2 == 0){
        return ("True");
    }
    else{
        return ("False");
    }
}

console.log("Number 1 is: " + evenOdd(num1))