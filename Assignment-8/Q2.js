// Error here is 

let myObject = { 
   name: 'John', 
   age: 30 
};
for (let property in myObject) { // Let keyword is not used here
   console.log(property, ': ', myObject.property);
}