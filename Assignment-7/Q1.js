// Callback function to handle an asynchronous operation

function catFacts(callback){
    const url = "https://catfact.ninja/fact";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            callback(data);
        })
        .catch((error) => {
            console.error("Fetch is not working: ");
        })
}

function displayData(data){
    console.log(data);
}

catFacts(displayData);