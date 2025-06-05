//Q7 Find that the number is prime or not?

function prime() {
    let num = prompt("Enter a number: ");
    if(isNaN(num)){
        alert("Enter a valid number: ");
    }
    else{
        if(num == 1 || num == 0){
            console.log("Neither prime nor composite");
        }
        else{
            for(let i=2; i<num; i++){
                if(num%i == 0){
                    console.log("Composite");
                    break;
                }
                else if(i == num-1){
                    console.log("Prime")
                }
            }
        }
    }
}

prime()