// Create class of shape that contains width and height as data members and method getArea.
// Parent class
class shape{
    // Constructor
    constructor(w, h){
        this.width = w;
        this.height = h;
    }
    // Member function
    getArea(){
        console.log(`Area is: ${this.height * this.width}`);
    }
}

// Child class
class Rectangle extends shape{
}

// Child class
class Triangle extends shape{
    // getArea function is defined again
    getArea(){
        console.log(`Area is: ${(this.height * this.width)/2}`);
    }
}

// Created instances of classes
const square = new shape(10, 10);
const rec = new Rectangle(10, 20);
const triangle = new Triangle(10, 30);
square.getArea();
rec.getArea();
triangle.getArea();
// square.getArea();