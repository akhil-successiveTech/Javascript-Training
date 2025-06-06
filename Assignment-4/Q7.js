//Q7 Program to find duplicate elements in an array

function duplicate(){
    let arr = [];
    let arrSize = prompt("Enter the size of array: ");
    for(let i = 0; i < arrSize; i++){
        let num1 = parseInt(prompt(`Enter the number ${i+1}: `));
        arr.push(num1);
    }

    //sort array
    arr.sort();
    console.log(arr);

    // let set = new Set(arr);
    // for(let element of set){
    //     let count = 0;
    //     for(let i = 0; i < arrSize; i++){
    //         if(element == arr[i] && count <= 1){
    //             count++;
    //         }
    //         else{
    //             count = 0;
    //             break;
    //         }
    //     }
    // }
    // console.log(set);
}

duplicate()