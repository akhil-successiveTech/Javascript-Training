function prime() {
    let num = prompt("Enter a number: ");
    if(num == 1 || num == 0){
        console.log("Composite");
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

prime()