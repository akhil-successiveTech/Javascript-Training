// Convert string into camel case

function camelCase(){
    let str = prompt("Enter a string value: ");
    let splitStr = str.split(" ");
    let answer = "";
    answer += splitStr[0];

    for(let i = 1; i<splitStr.length; i++){
        // Created a character array
        let newStr = splitStr[i].split("");
        // Converted 1st alphabet to upper case
        let char = newStr[0].toUpperCase();
        newStr[0] = char;
        // Merged the character array
        let finalStr = newStr.join("");
        answer += finalStr;
    }

    console.log(answer);
}

camelCase();