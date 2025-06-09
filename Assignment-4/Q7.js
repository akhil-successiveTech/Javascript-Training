//Q7 Program to find index of duplicate elements in an array

function duplicate(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    let length = arr.length;
    let index = new Map();
    for(let i=0; i<length; i++){
        if(index.has(arr[i])){
            console.log([index.get(arr[i]), i]);
            break;
        }
        else{
            index.set(arr[i], i);
        }
    }
}

duplicate()