// Error here is var is used instead of let 

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); }

for (let i = 0; i < 10; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 1000); 
}