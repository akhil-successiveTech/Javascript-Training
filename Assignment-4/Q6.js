//Q6 Program to find sum of an array

function findSum(){
    let arr = [];
    let num = parseInt(prompt("Enter the size of array: "));
    for(let i = 0; i < num; i++){
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum += arr[i];
    }
    console.log(sum);
}

findSum()