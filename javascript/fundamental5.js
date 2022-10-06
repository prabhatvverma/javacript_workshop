let printDetailswithArg = function (personObj) {
    console.log("Function With Arguments");
    console.log(personObj.name);
    console.log(personObj.address);
    console.log(personObj.age);
};
printDetailswithArg({ name: "sunil", address: "prayagraj", age: 30 });   //Inline Object



let printDetailsWithThis = function () {
    console.log("Function With This");
    console.log(this.name);
    console.log(this.address);
    console.log(this.age);
}

console.dir(printDetailsWithThis);

//personObj.printDetailsWithThis();  this is the work of call function 
printDetailsWithThis.call({ name: "sunil", address: "prayagraj", age: 30 });


let person = {
    name: "ramratan",
    address: "lakhimpur",
    age: 30,
    getDetails: function () {
        return this.name + "-" + this.address + "-" + this.age;

    }
};

let details = person.getDetails();
console.log(details);