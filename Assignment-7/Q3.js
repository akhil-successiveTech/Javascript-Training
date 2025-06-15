// Convert callback based API to promise based API

// function fetchData(callback){
//     setTimeout(() => {
//         callback(null, "Data fetched successfully!");
//     },1000)
// }

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000)
    })
}

fetchData().then((res) => {
    console.log(res);
});