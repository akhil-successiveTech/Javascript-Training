// Program to give count of variables in a string

function countChar(){
    let str = prompt("Enter a string value: ");
    // Split into character array
    let splitArr = str.split("");
    // Count of variables
    let count = 0;
    let compare = 0;
    // Sorted the character array
    splitArr.sort();
    let answer = " "

    for(let i=0; i<=splitArr.length; i++){
        // Edge case
        if(i == splitArr.length){
            answer += splitArr[compare] + count;
            break;
        }
        else if(splitArr[i] == splitArr[compare]){
            count++;
        }
        else{
            answer += splitArr[compare] + count;
            compare = i;
            count = 1;
        }
    }
    console.log(answer)
}

countChar()