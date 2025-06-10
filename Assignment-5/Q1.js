// Function to iterate over object

function iterateObj(){
    // Create an object
    let obj = {
        name : "Akhil",
        age : 21,
        location: "Ghaziabad",
        company: "Successive"
    }

    // For loop that uses an iterator
    for(let iterate in obj){
        console.log(`${iterate} : ${obj[iterate]}`);
    }
}

iterateObj();