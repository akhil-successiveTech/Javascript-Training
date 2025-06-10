// Program to sort an array of object on the basis of age

function sortObj(){
    let arr = [{name: "Akhil", age: 21}, {name: "Parth", age: 19}, {name: "Vaibhav", age: 22}];
    arr.sort((a, b) => a.age - b.age);
    for(val in arr){
        console.log(arr[val]);
    }
}

sortObj();