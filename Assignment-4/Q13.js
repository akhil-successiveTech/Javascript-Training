// Inverse of array

function inverseArr(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    // Created a new array with inverted values
    let arrNew = []
    for(let i = 0; i<arr.length; i++){
        let value = arr[i];
        arrNew[value] = i;
    }

    console.log(arrNew);
}

inverseArr()