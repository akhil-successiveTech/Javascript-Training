let num1 = parseInt(prompt("Enter a number 1: "));
let num2 = parseInt(prompt("Enter a number 2: "));

const evenOdd = (num1) => {
    if(num1%2 == 0){
        return ("True");
    }
    else{
        return ("False");
    }
}

console.log("Number 1 is: " + evenOdd(num1))