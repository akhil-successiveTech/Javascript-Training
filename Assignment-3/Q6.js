function oddEven(){
    let num = prompt("Enter a number: ")
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

oddEven();