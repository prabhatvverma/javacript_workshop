let printDetails = function () {
    console.log("......Printing Details......");
    console.log(this.name);
    console.log(this.address);
    console.log(this.age);
};
// printDetails.myProperty = "MY PROPERTY";
 console.dir(printDetails);
// printDetails();


function PersonConstructor(name, address, age) {
    let personObj = {};
    personObj.name = name;
    personObj.address = address;
    personObj.age = age;
    personObj.printDetails = printDetails;
    return personObj;
}

console.dir(PersonConstructor);
let Person1= PersonConstructor("sunil","prayagraj", 34);
console.dir(Person1);