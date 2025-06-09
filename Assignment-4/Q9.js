// Find the last duplicate index from an array

function lastDup(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    // Enter the value to check duplicates
    let value = prompt("Enter the value to check duplicate: ");
    let last = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == value){
            last = i;
        }
    }
    console.log(arr);
    console.log(`Index is: ${last}`);
}

lastDup();