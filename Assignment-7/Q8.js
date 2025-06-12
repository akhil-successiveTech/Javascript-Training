// Create a function that fetches data from multiple API's in parallel and then performs some
// operation on the combined data, using async/await

async function multipleFetch(){
    // Links for API calls
    const url1 = "https://catfact.ninja/fact";
    const url2 = "https://official-joke-api.appspot.com/random_joke";

    const data1 = fetch(url1)
        .then(res => res.json());
    const data2 = fetch(url2)
        .then(res => res.json());

    const finalData = await Promise.all([data1, data2]);
    // console.log(typeof(finalData));
    displayData(finalData[0], finalData[1]);
    
}

function displayData(data1, data2){
    console.log("Cat fact is: ", data1.fact);
    console.log(`Joke about ${data2.type} is: `,data2.setup);
}

multipleFetch();