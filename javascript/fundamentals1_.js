// objects are the way to represent data so that we can reuse them
//objects are signatures
let person1 = {
  name: "sunil",
  address: "lucknow",
  age: 49
};

console.log(person1);

// empty objects
let person2 = {};

person2.name = "sunil";
person2.address = "lucknow";
person2.age= 35;
console.log(person2);

//objects as arrays
person3 = {};
person3["name"] = "ajay";
person3["address"] = "kanpur";
person3["age"] = [35];
console.log(person3);

let register = [person1, person2, person3];
console.log(register[0]);


//functions are used to cerate a cade reuseable
//Behaviurs
//formula
function printDetails(personObj){
  console.log("..........Printing Details........");
  console.log(personObj.name);
  console.log(personObj.address);
}
printDetails(person3);

function addAndSquare(number1, number2){
  let result = number1 + number2;
  let squareOfResult = result*result;
  return squareOfResult;
}

let result = addAndSquare(3, 6);
console.log(result);
