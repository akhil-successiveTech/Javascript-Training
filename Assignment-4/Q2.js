//Q2 Write a program to reverse a string 

function reverse(){
    let str = prompt("Enter the string value to reverse: ");
    //Divided string into words in an array
    let splitArr = str.split(" ");
    //Divided words into character arrays and reversed them
    for(let i = 0; i < splitArr.length; i++){
        let newStr = splitArr[i].split("").reverse().join("");
        splitArr[i] = newStr;
    }
    //Joined words into a single string
    let finalStr = splitArr.join(" ");
    console.log(finalStr);
}

reverse()