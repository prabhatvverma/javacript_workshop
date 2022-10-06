let person = {};// EMPTY OBJECT
person.name = "sunil";
person["address"] = "Delhi";
person.age = 69;
person.printDetails = function printDetails() {
    console.log("......Printing Details......");
    console.log(person.name);
    console.log(person.address);
    console.log(person.age);
};
//...........formula of object creation............

// function PersonConstructor(name,address,age){
//     let person = {};
//     person.name= name;
//     person["address"]=address;
//     person.age= age;
//     person.printDetails= function(){
//         console.log("......Printing Details......");
//         console.log(person.name);
//         console.log(person.address);
//         console.log(person.age);
//     };
//     return person;
// }

//...........formula of object creation............
//this is the way how to create objects eassysly and make code mintanable 

//(this method of program writing is looking good but whene we run code the program is showing that both are not same but we can clearly see that both are same)
// function PersonConstructor(name, address, age) {
//     return {
//         name,
//         address,
//         age,
//         printDetails: function () {
//             console.log("......Printing Details......");
//             console.log(this.name);
//             console.log(this.address);
//             console.log(this.age);

//         }
//     };
// }
// let person1 = PersonConstructor("prabhat", "lakhimpur", 30);
// let person2 = PersonConstructor("prabhat", "lakhimpur", 30);
// let printDetails2 = person2.printDetails;

// if (printDetails1 == printDetails2) {
//     console.log("both objects are same");
// } else {
//     console.log("both objects are not same")
// }


//...........formula of object creation............
//this is the way how to create objects eassysly and make code mintanable 
let printDetails = function () {
    console.log("......Print Details.......");
    console.log(this.name);
    console.log(this.address);
    console.log(this.age);
};
function PersonConstructor(name, address, age) {
    return {
        name,
        address,
        age,
        printDetails: printDetails
    };
}

let person1 = PersonConstructor("prabhat", "lakhimpur", 30);
//console.log(person1.name);
//console.log(person1.address);
//console.log(person1.age);
//person1.printDetails();
let printDetails1 = person1.printDetails;

let person2 = PersonConstructor("prabhat", "lakhimpur", 30);
let printDetails2 = person2.printDetails;

if (printDetails1 == printDetails2) {
    console.log("both objects are same");
} else {
    console.log("both objects are not same")
}