// Using multiple callback functions in single function

function multipleCall(Callback1, Callback2, Callback3){
    const url = "https://catfact.ninja/fact";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Callback1(data);
            Callback2(data);
            Callback3(data);
        })
        .catch((error) => {
            console.error("Fetch is not working: ");
        })
}

function displayData(data){
    console.log("Full data: ", data);
}

function displayFact(data){
    console.log("Fact: ", data.fact);
}

function displayLength(data){
    console.log("Length: ", data.length);
}

multipleCall(displayData, displayFact, displayLength);