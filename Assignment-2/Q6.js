//Q6 Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function evenOdd(){
    let num = parseInt(prompt("Enter a number: "))
    if(num%2 == 0){
        console.log("True")
    }
    else{
        console.log("False")
    }
}

evenOdd();