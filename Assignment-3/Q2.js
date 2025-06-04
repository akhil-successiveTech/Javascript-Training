//Q2. Display pattern

//1
//2 3
//4 5 6
//7 8 9 10

function pattern() {
    let num = prompt("Enter a value: ");
    let row = 1;
    let col = 1;
    for(let i=1; i<=num; i++){
        // Creating a string and concatinating numbers
        let a = "";
        for(let j=1; j<=i; j++){
            a += row + " ";
            row++;
        }
        console.log(a);
    }
}

pattern();