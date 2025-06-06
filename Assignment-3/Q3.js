//Q3. Display pattern

//1
//2 2
//3 3 3
//4 4 4 4

function pattern(){
    let num = parseInt(prompt("Enter a number: "));
    for(let i = 1; i<=num; i++){
        let a = "";
        for(let j = 1; j<=i; j++){
            a += i + " ";
        }
        console.log(a);
    }
}

pattern()