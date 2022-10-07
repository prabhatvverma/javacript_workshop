// // getDetails = function () {
// //     return "my name is " + this.name + " i'm from " + this.address + " &, i'm " +
// //         this.age + " year's old";
// // };
// function PersonConstructor(name, address, age) {
//     this.name = name;
//     this.address = address;
//     this.age = age;
//     // this.details = details;
// }

// //shared function 
// PersonConstructor.prototype.details = function () {
//     return "my name is " + this.name + " i'm from " + this.address + " &, i'm " +
//         this.age + " year's old";
// };

// let person1 = new PersonConstructor("sahil", "hardoi", 25);
// console.log(person1.details());
// let person2 = new PersonConstructor("ramkhan", "lucknow", 29);
// console.log(person2.details());

// console.log(person1.details == person2.details);

let getDetails = function () {
    return "my name is " + this.name + " i'm from " + this.address + " &, i'm " +
        this.age + " year's old";
};

function PersonConstructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.details = getDetails;
}

PersonConstructor.prototype.details = function () {
    return "my name is " + this.name + " i'm from " + this.address + " &, i'm " +
    this.age + " year's old";
};

let person1 = new PersonConstructor("aradhya", "gurganv", 24);
console.log(person1.details());

let person2 = new PersonConstructor("shivam", "shitapur", 49);
console.log(person2.details());