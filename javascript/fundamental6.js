// let getDetails = function () {
//     return "my name is " + this.name + " i'm from " + this.address + " &, i'm " +
//         this.age + " year's old";
// };
// function PersonConstructor(name, address, age) {
//     //(empty obj)
//     //let personObj = {};
//     // personObj.name = name;
//     // personObj.address = address;
//     // personObj.age = age;
//     // personObj.details = getDetails;
//     // return personObj;
//     this.name = name;
//     this.address = address;
//     this.age = age;
//     this.details = getDetails;
//     // return this;
// }
// let person1 = new PersonConstructor("ashish", "lakhimpur", 29);
// console.log(person1.details());
// let person2 = new PersonConstructor("shivam", "lucknow", 39);
// console.log(person2.details());

// console.log(person1.details == person2.details);

let getDetails = function () { return "may name is " + this.name + " and i am from " + this.address + " i'm " + this.age + " years old" };

function PersonConstructor(name, address, age) {
    // let personObj = {};
    this.name = name;
    this.address = address;
    this.age = age;
    this.details = getDetails;

}

let person1 = new PersonConstructor("sudgir", "ramapur", 34);
console.log(person1.details());


let person2 = new PersonConstructor("sudgir", "ramapur", 34);
console.log(person2.details());

console.log(person1.details == person2.details);