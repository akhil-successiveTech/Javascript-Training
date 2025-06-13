// Error is: This function is a constructor so we need to use new keyword for that

// function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

function Person(name, age) { 
    this.name = name; 
    this.age = age; 
};

var person = new Person("John Doe", 30);
console.log(person.name);