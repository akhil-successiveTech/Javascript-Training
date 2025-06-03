let num1 = 10;
let num2 = 20;

function sum(num1, num2) {
    let ans = num1 + num2;
    return ans;
}

function func2(paramFunction){
    console.log(paramFunction(20, 20));
}

func2(sum);