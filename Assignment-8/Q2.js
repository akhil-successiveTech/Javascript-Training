// Error here is in console log. We should use , symbol instead of + symbol.

 let myObject = { 
   name: 'John', 
   age: 30 
};

for(property in myObject) {
   console.log(property + ': ' + myObject[property]);
}