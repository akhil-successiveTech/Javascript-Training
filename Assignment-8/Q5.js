// Error of accessing the wrong index in the array

// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

let myNumber = myArray[5]; // 5th index is not present in myArray
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
}