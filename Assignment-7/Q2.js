// Use of multiple callback functions in a single function in JavaScript

const url = "https://catfact.ninja/fact";

function multipleCall(displayData, displayError, displayFact, displayLength){
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayData(data);
            displayFact(data);
            displayLength(data);
        })
        .catch((error) => {
            displayError(error);
        })
}

function displayData(data){
    console.log(data);
}

function displayFact(data){
    let answer = JSON.stringify(answer);
    console.log(data.fact);
}

function displayLength(data){
    console.log(data.length);
}

function displayError(error){
    console.log(error);
}

multipleCall(displayData, displayError);