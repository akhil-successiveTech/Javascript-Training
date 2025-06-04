//Q1. Create a calculator

function calculator(){
    let num1 = parseInt(prompt("Enter number 1: "));
    let num2 = parseInt(prompt("Enter number 2: "));
    let opr = prompt("Enter operation: ");
    let ans = 0;
    if(opr == "add"){
        ans = num1 + num2;
    }
    else if(opr == "sub"){
        ans = num1 - num2;
    }
    else if(opr == "multiply"){
        ans = num1 * num2;
    }
    else if(opr == "divide"){
        ans == num1/num2;
    }
    else{
        ans = "Enter valid operation"
    }
    console.log(ans)
}

calculator();