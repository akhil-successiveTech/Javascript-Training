//Q6. Display odd and even numbers.
//Next Question: - Try to do it in single loop

function oddEven(){
    let num = parseInt(prompt("Enter a number: "));
    if(isNaN(num)){
        alert("Enter a valid number: ");
    }
    else{
        let even = [];
        let odd = [];
        for(let i=1; i<=num; i++){
            if(i%2 == 0){
                even.push(i);
            }
            else{
                odd.push(i);
            }
        }
        console.log("Even numbers: " + even);
        console.log("Odd numbers: " + odd);
    }
}

oddEven();