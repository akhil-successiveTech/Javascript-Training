// Remove duplicates for the array

function removeDup(){
    let arr = [];
    // Enter the size of array
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        // Enter the values of array
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }
    // Created set to remove duplicate elements
    const setAns = new Set(arr);
    // Converted back to array
    let answer = [...setAns];
    console.log(answer);
}

removeDup()