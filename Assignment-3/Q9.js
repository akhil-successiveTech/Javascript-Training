function twice(){
    let i = 2;
    let arr = []
    while(i <= 4096*2){
        arr.push(i);
        i *= 2;
    }
    console.log(arr);
}

twice()