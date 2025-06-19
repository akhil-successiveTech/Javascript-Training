// Create a function that performs multiple asynchronous operation in parallel using async/await and waits 
// for all of them to complete before the results.

async function multipleAsync(){
    // Links for API calls
    const url1 = "https://catfact.ninja/fact";
    const url2 = "https://www.boredapi.com/api/activity";

    // Fetch command
    const data1 = fetch(url1);
    const data2 = fetch(url2);

    // Try catch block
    try{
        let finalResults = [];
        finalResults = await Promise.all([data1, data2]);
        console.log("Results are: ", finalResults[0], finalResults[1]);
    } catch (error){
        console.error("Error: ", error);
    }
}

multipleAsync();