function duplicateChar(){
    let str = prompt("Enter the string: ");
    let setAns = new Set(str);
    let str2 = "";
    for(let i of setAns){
        str2 += i;
    }
    console.log(str2);
}

duplicateChar()