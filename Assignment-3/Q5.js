//Q5. Pattern display

//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *

function pattern(){
    let num = parseInt(prompt("Enter a number: "));
    // console.log(isNaN(num))
    if(isNaN(num)){
        alert("Enter a valid number: ");
    }
    else{
        let rows = 1;
        for(let i = 1; i<=num; i++){
            let a = "";
            for(let j = 1; j<=num-rows; j++){
                a += " ";
            }
            for(let k = num-rows; k<num; k++){
                a += "* ";
            }
            rows++;
            console.log(a);
            if(rows > num){
                rows = 1;
                for(let i = 1; i<=num; i++){
                    let a = "";
                    for(let j = 1; j<=rows; j++){
                        a += " ";
                    }
                    for(let k = 1; k<=num-rows; k++){
                        a += "* ";
                    }
                    rows++;
                    console.log(a);
                }
            }
        }
    }
}

pattern()