// Convert a string into uppercase and lowercase

function upperLower(){
    let str = prompt("Enter a string value: ");
    // Input from user for choice
    let choice = prompt("Enter 1 for uppercase and 0 for lowercase: ");
    let answer = "" 
    if(choice == 1){
        answer = str.toUpperCase();
    }
    else{
        answer = str.toLowerCase();
    }
    console.log(answer);
}

upperLower();