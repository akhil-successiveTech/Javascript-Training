// Reverse of array

function reverseArr(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    // Enter data into string in reverse order
    let start = 0;
    for(let i=arr.length-1; i>=0; i--){
        if(start != i){
            let temp = arr[i];
            arr[i] = arr[start];
            arr[start] = temp;
            start++;
        }      
        else if(start == i || start > i){
            break;
        }
    }

    console.log(arr);
}

reverseArr();