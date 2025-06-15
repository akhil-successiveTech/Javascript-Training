// Implement a promise based rate limiter, that limits the number of concurrent requests means
// how offen a function can be called

let limit = 5
const url = "https://catfact.ninja/fact";

async function rateLimiter(){
    limit--;
    if(limit == 0){
        return "Error limit reached";
    }
    let res = fetch(url).then((res) => res.json());
    return res;
}

rateLimiter().then((res) => {
    console.log(res);
    rateLimiter().then((res) => {
        console.log(res);
        rateLimiter().then((res) => {
            console.log(res);
            rateLimiter().then((res) => {
                console.log(res);
                rateLimiter().then((res) => {
                    console.log(res);
                });
            });
        });
    });
});