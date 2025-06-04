function loops(){
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for(let i = 1; i<= 20; i++){
        arr1.push(i);
    }
    console.log("For loop: " + arr1);
    let num = 1
    while(num <= 20){
        arr2.push(num);
        num++;
    }
    console.log("While loop: " + arr2);
    let num2 = 1
    do{
        arr3.push(num2);
        num2++;
    }while(num2 <= 20)
    console.log("Do while loop:" + arr3);
}

loops()