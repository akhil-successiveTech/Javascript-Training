// Function to find intersection of arrays

function intersection(arr1,arr2){

    // Sorted 2 arrays for easy searching
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // Array of intersection
    let finalArr = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer1 < arr1.length && pointer2 < arr2.length){
        if(arr1[pointer1] == arr2[pointer2]){
            finalArr.push(arr1[pointer1]);
            pointer1+=1;
            pointer2+=1;
        }else if(arr1[pointer1] < arr2[pointer2]){
            pointer1+=1;
        }else{
            pointer2+=1;
        }
    }

    const setAns = new Set(finalArr)
   return (setAns);
}

console.log(intersection([1,2,2,2,3,44,5,44,5],[22,2,2,44,3,5,6]));