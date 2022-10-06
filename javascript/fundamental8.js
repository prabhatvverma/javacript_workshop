function PersonConstructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
}

let protoTypeObj = PersonConstructor.prototype;

protoTypeObj.details = function () {
    return "Name: "+ this.name + " Address: " + this.address + " Age: " +
        this.age + " year's old";
};
protoTypeObj.doSomething= function(){
    console.log("Doing Something......");
};
class Person{
    C
}
let person1= new PersonConstructor()
console.log(person1.details());
let person2= new PersonConstructor()
console.log(person2.details());