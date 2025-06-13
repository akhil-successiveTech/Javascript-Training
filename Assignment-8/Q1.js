// Error here is in the for loop. Second condition should be only less than myArray.length
// not less than equal too

// let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

let myArray = [1,2,3,4];
for(let i = 0; i < myArray.length; i++){ // i <= myArray.length
    console.log(myArray[i]);
}