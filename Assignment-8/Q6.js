// Error here is we are assigning the object function into a variable. This will remove the 
// the connection with the object

// var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

var person = { 
    name: "John Doe", 
    age: 30, 
    getDetails: function() { 
        console.log(this.name + " is " + this.age + " years old"); 
    } 
};

var getPersonDetails = person.getDetails.bind(person); // Bind function is used
// console.log(getPersonDetails);
getPersonDetails();