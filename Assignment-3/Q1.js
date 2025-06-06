//Q1. Create a calculator

function calculator(){
    let num1 = parseInt(prompt("Enter number 1: "));
    let num2 = parseInt(prompt("Enter number 2: "));
    let opr = prompt("Enter operation: ");
    opr.toLowerCase();
    let ans = 0;
    if(opr == "add"){
        ans = num1 + num2;
        console.log(ans);
    }
    else if(opr == "sub"){
        ans = num1 - num2;
        console.log(ans);
    }
    else if(opr == "multiply"){
        ans = num1 * num2;
        console.log(ans);
    }
    else if(opr == "divide"){
        if(num2 == 0){
            console.log("You cannot divide a number by 0");
        }
        else{
            ans = num1/num2;
            console.log(ans);
        }
    }
    else{
        ans = "Enter valid operation"
    }
}

calculator();