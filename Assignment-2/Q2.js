//Q2. Function to take input from user and display it
function takeInput(){
    let userName = prompt("Enter user name: ");
    let userAge = prompt("Enter user age: ");
    let userPhoneNo = prompt("Enter user phone number: ");

    if(userName !== null || userAge !== null || userPhoneNo !== null){
        console.log(userName);
        console.log(userAge);
        console.log(userPhoneNo);
    }
}

console.log(takeInput());