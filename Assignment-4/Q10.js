// Function to concatenate an input of array of arrays

function concatArray (){
    // Sample input
    let arrMain = [[1,2], [3,4], [5,6]];
    // Converted into string
    let strArr = arrMain.toString();
    let Final = strArr.split(",");
    console.log(Final);
}

concatArray();