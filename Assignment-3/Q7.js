//Q7 Display prime numbers till 50?

function printPrime(){
    for(let i = 2; i <= 50; i++){
        let flag = 0;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j == 0){
            flag = 1;
            break;
            }
        }
        if(!flag)console.log(i);
    }
}

printPrime();