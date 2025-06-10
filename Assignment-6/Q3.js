//Q3.1 Class person with properties name, age, gender and interests. Methods should be 
// included like greeting and farewell.

class Person{
    // Constructor
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log(`Welcome, my name is ${this.name}. My gender is ${this.gender}. My
            interest is ${this.interests}`);
    }

    farewell(){
        console.log(`Goodbye, ${this.name}`);
    }
}

//Q3.2 Create a class student that inherits from the parent class person 
class Student extends Person{
    constructor(name, studies){
        super(name);
        this.studies = studies;
        // console.log(name);
    }

    greeting(){
        console.log(`Welcome, my name is ${this.name}. I am studing ${this.studies}`);
    }    
}

//Q3.3 Create a class teacher that inherits from the parent class person
class Teacher extends Person{
    constructor(name, subTaught){
        super(name);
        this.subTaught = subTaught;
    }

    farewell(){
        console.log(`Goodbye, ${this.name}. The subjects taught are: ${this.subTaught}`)
    }
}

const person1 = new Person("Akhil", 21, "Male", "Coding");
person1.greeting();
person1.farewell();
const stud1 = new Student("Akhil", "Maths");
stud1.greeting();
const teacher1 = new Teacher("Parth", "Maths, Science");
teacher1.farewell();