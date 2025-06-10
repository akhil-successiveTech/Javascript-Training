// Bubble sort

function bubbleSort(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    if(arrSize <= 0){
        alert("Enter a valid number: ")
    }
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter a (positive)number ${i+1}: `));
        arr.push(num1);
    }

    // Bubble sort
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr);
}

bubbleSort()