// Use of callback function for asynchronous operations
// This is an asynchronous operation
const url = "https://catfact.ninja/fact";

function fetchData(callback){
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.error("Error when fetching data: ", error);
        });
}

// This is a callback function
function displayData(data){
    console.log(data);
}

fetchData(displayData);