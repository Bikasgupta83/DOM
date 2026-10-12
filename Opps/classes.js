//! Class
//? A class is a blueprint or template used for creating objects
//? Introduced in ES6 (ECMAScript 2015),
//? classes allow you to group data (properties)
//? and behaviors (methods) together into a single, structured package

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }  
}

let user1 = new User("Bikas",30);
// console.log(user1);



class Library{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

    getBook(){
        console.log(this.title);
    }
}
let book1 = new Library("Pride and Prejudice","Jane Austen");
// console.log(book1)




class BankAccount{
    constructor(amount){
        this.amount = amount;
    }

    withdrawl(withdrawlAmount){
        this.amount = this.amount - withdrawlAmount;
    }

    deposite(depositeAmount){
        this.amount = this.amount + depositeAmount;
    }

    getCurrentBalance(){
        console.log("Balance Amount : ", this.amount);
    }
}

// let BankAccount1 = new BankAccount(5000);
// BankAccount1.withdrawl(2000);
// BankAccount1.getCurrentBalance();

// BankAccount1.deposite(5000);
// BankAccount1.getCurrentBalance();







//! getter and setter
//? getters and setters are special methods that allow you to 
//? define how an object's properties are accessed or modified

//! #
//? # is used to declare private class fields and private methods
//? # makes a class property private, meaning it can only be accessed from inside that class.

class Student{
    #name;
    #mark;
    #age;

    constructor(name,mark){
        this.#name = name;
        this.#mark = mark;
    }

    //? getter
    getMark(){
        console.log(this.#mark);
    }

    getName(){
        console.log(this.#name);
    }

    getAge(){
        console.log(this.#age);
    }

    //? setter
    setMark(newMark){
        this.#mark = newMark;
    }

    setName(newName){
        this.#name = newName;
    }

    setAge(age){
        this.#age = age;
    }
}


// let student1 = new Student("Bikas",40);
// student1.getName();
// student1.getMark();
// student1.setAge(22);
// student1.getAge()





//! static
//? static is useful for functionality that belongs to the class as a whole, 
//? rather than to an individual object.

//? Why is totalMarks() static?
//? Because totalMarks() isn't really the responsibility of one particular student.

class Students{
    #name;
    #mark;

    constructor(name,mark){
        this.#name = name;
        this.#mark = mark;
    }

    static totalMarks(mark1,mark2){
        console.log(mark1+mark2);
    }

    getMark(){
        return this.#mark;
    }
}

// let student1 = new Students("Bikas",50);
// let student2 = new Students("Aakash",40);

// Students.totalMarks(student1.getMark(),student2.getMark());




//* #mark
//* is private, so outside code cannot directly change it:
//* student.#mark = 500; // ❌ Error
//* Instead, the class controls how it can be changed:
//* student.setMark(90); // ✅



//! OOPs Pillars -> 4 pillars
//? Encapsulation
//? Inheritance - multilevel inheritance
//? Polymorphism
//? Abstraction



//! Encapsulation
//? Encapsulation is the OOP concept of hiding an object's internal data
//? and providing controlled access to it through methods.


//! inheritance
//? It inherit methods and properties from parent class by using extends keyword

//! super()
//? If the child has its own constructor, use super() to call the parent's constructor:

//! super.method()
//? Call the method of the parent class from the child class.


class Vehicle{
    no_of_wheel = 4;

    engine(){
        console.log("Engine Start")
    }
    move(){
        console.log("Move");
    }
    injectFuel(){
        console.log("Fuel Injected Successfully")
    }
    start(){
        this.injectFuel();
        this.engine();
    }
}

class Car extends Vehicle{
    name;
    model;
    price;

    constructor(name,model,price){
        super();
        this.name = name;
        this.model = model;
        this.price = price;
    }
    color(){
        console.log("Red");
    }
    drive(){
        super.start();
    }
}

// let car1 = new Car("Volvo","alpha",7000);
// console.log(car1.no_of_wheel);
// car1.color();
// car1.engine();
// car1.move();
// car1.drive();





//! Polymorphism
//? Polymorphism means "one name, many forms."
//? In JavaScript OOP, it means the same method name can behave 
//? differently depending on the object that uses it.

//! Method Overriding
//? When a child class provides its own implementation of a method 
//? that already exists in the parent class, it is called method overriding.


class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

let dog = new Dog();
let cat = new Cat();

// dog.sound();
// cat.sound();



//! Abstraction
//? Abstraction means hiding the unnecessary internal details and
//? showing only the important functionality to the user.
//? Abstraction = Hide implementation details + Show only necessary functionality.

class Car {
    start() {
        this.#injectFuel();
        this.#startEngine();
        console.log("Car Started");
    }

    #injectFuel() {
        console.log("Fuel injected");
    }

    #startEngine() {
        console.log("Engine started");
    }
}

// let car = new Car();
// car.start();



