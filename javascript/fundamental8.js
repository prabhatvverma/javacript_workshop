// function PersonConstructor(name, address, age) {
//     this.name = name;
//     this.address = address;
//     this.age = age;
// }

// let protoTypeObj = PersonConstructor.prototype;

// protoTypeObj.details = function () {
//     return "Name: "+ this.name + " Address: " + this.address + " Age: " +
//         this.age + " year's old";
// };
// protoTypeObj.doSomething= function(){
//     console.log("Doing Something......");
// };
// class Person{
//     C
// }
// let person1= new PersonConstructor()
// console.log(person1.details());
// let person2= new PersonConstructor()
// console.log(person2.details());





// (nextday code)




// function PersonConstructor(name, address, age) {
//     this.name = name;
//     this.address = address;
//     this.age = age;
// };
// let protoTypeObj = PersonConstructor.prototype;

// protoTypeObj.details = function () {
//     return "name : " + this.name + "age : " + this.age + "Address : " + this.address
// };

// let Person1 = new PersonConstructor("chanda", "khalepurwa", 35);
// console.log(Person1.details());

// let Person2 = new PersonConstructor("anjali", "lakhimpur", 20);
// console.log(Person2.details());

// console.log(Person1.details == Person2.details);


class Person {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }

    details() {
        return "Name : " + this.name + " Adderess : " + this.address + " Age : " + this.age;
    }

    doSomething() {
        console.log("Doing Something...");
    }
}

let person1 = new Person("Sunil", "Lucknow", 30);
console.log(person1.details());

let person2 = new Person("Shushil", "Kanpur", 50);
console.log(person2.details());

console.log(person1.details == person2.details);

class Student extends Person {
    constructor(name, address, age, id, college) {
        super(name, address, age)
        this.id = id;
        this.college = college;
    }
    details() {
        return super.details() + " id : " + this.id + " college : " + this.college;
    }
}

let student = new Student("rakesh", "lakhimpur", 34, 1001, "rama university");
console.log(student.details());
