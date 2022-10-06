// let person1 = {};
// person1.name = "srivastava";
// person1["address"] = "kanpur";
// person1.age = 23;
// person1.printDetails = function(something){
//   console.log("......Printing Details..... " + this.age);
//   console.log(something);
// }
//
// person1.printDetails('Hi there');



// function PersonConstructor(name,address,age){
//   let Person={};
//    Person.name = name;
//    Person.address = address;
//    Person.age = age;
//    Person.printDetails = function(){
//      console.log("......printing details......");
//      console.log(Person.name);
//      console.log(Person.address);
//      console.log(Person.age);
//    };
//    return Person;
// }


function PersonConstructor(name, address,age){
  return{
    name,
    address,
    age,
    printDetails : function(){
      console.log(".......printing Details......");
      console.log(this.name);
      console.log(this.address);
      console.log(this.age);
    }
  };
}

let person1 = PersonConstructor("sahil", "saharanpur", 35);
let printDetails1 = person1.printDetails;

let person2 = PersonConstructor("sahil", "saharanpur", 35);
let printDetails2 = person2.printDetails;

if(printDetails1 == printDetails2){
  console.log("both objects are same ");
} else
console.log("bothe are not same ");
