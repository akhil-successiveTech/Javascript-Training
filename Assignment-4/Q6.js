//Q6 Program to find sum of an array

function findSum(){
    let arr = [];
    let num = parseInt(prompt("Enter the size of array: "));
    if(num <= 0){
        alert("Enter a valid number: ")
    }
    for(let i = 0; i < num; i++){
        let num1 = parseInt(prompt(`Enter a (positive)number ${i+1}: `));
        arr.push(num1);
    }
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum += arr[i];
    }
    console.log(sum);
}

findSum()