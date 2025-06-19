// Implement a function that returns a resolved promise after a specified delay using async/await

async function catFacts(){
    const url = "https://catfact.ninja/fact";
    let time = prompt("Enter the specified delay in seconds: ");
    time = time * 1000;
    const res = await fetch(url);

    // Specified delay
    setTimeout(() => {
        console.log(res);
    }, time)
}

catFacts();