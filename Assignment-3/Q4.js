//Q4. Display Pattern 

//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

function pattern(){
    let num = prompt("Enter the number: ");
    let rows = 1;
    for(let i = num; i>=1; i--){
        let a = "";
        for(let j = 1; j <= i; j++){
            a += j + " ";
        }
        console.log(a);
        rows++;
    }
    if(rows > num){
        for(let i = 2; i<=num; i++){
            let a = "";
            for(let j = 1; j <= i; j++){
                a += j + " ";
            }
            console.log(a);
        }
    }
}

pattern()