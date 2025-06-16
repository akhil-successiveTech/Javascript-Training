// Implement a promise based rate limiter, that limits the number of concurrent requests means
// how offen a function can be called

let limit = 5
const url = "https://catfact.ninja/fact";

async function rateLimiter(){
    if(limit == 0){
        return "Error limit reached";
    }
    let res = fetch(url).then((res) => res.json());
    limit--;
    return res;
}

let arr = [];
for(let i = 0; i < limit; i++){
    arr.push(rateLimiter().then((res) => res.fact));
}

Promise.allSettled(arr).then((value) => {
    console.log(value);
})