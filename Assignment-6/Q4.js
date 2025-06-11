// Create a class person that has properties firstName, lastName and age

class person{
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

    averageAge(personObj){
        let average = 0;
        let length = personObj.length;
        for(let i of personObj){
            average += i.age;
        }
        average = average/length;
        console.log(average);
    }
}

const person1 = new person("Akhil", "Dhawan", 21);
const person2 = new person("Parth", "Yadav", 22);
const person3 = new person("Vaibhav", "Sharma", 22);
person1.fullName();
let arr = [person1, person2, person3];
person1.averageAge(arr) 