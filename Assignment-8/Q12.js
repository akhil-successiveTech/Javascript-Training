// Error is: setTimeout do not return anything

// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

async function getData() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
                resolve([1,2,3,4,5]);
        },1000)
    });
}

getData().then(function(data) {
    console.log(data);
});