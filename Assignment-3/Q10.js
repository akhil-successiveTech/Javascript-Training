//Q10 Display Fibonacci Series

let n = 10;
let a = 0;
let b = 1;

console.log("Fibonacci Series: ");
let str = "";
str += a + ", ";
str += b + ", ";
for(let i=0; i<n; i++){
    let c = a + b;
    a = b;
    b = c;
    str += c + ", ";
}

console.log(str);