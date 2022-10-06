// let Person1 = {
//     name: "sunil",
//     address: "lucknow",
//     age: 66,
//     printDetails: function printDetails() {
//         console.log("........Printing Details.......")
//         console.log(Person1.name);
//         console.log(Person1["address"]);
//     }
// };
// let Person2 = {
//     name: "mahesh",
//     address: "kanpur",
//     age: 45,
//     printDetails: function printDetails() {
//         console.log("........Printing Details.......")
//         console.log(Person2.name);
//         console.log(Person2["address"]);
//     }

// };

// //empty Object
// let Person3 = {};
// Person3.name = "adesh";
// Person3.address = "lucknow";
// Person3.age = 48;
// Person3.printDetails= function printDetails() {
//     console.log("........Printing Details.......")
//     console.log(Person3.name);
//     console.log(Person3["address"]);
// }


// // benifit :- you can define behaviurs with space 

// let Person4 = {};
// Person4["name"] = "prabhat";
// Person4["address"] = "lakhimpur";
// Person4["age"] = 25;
// Person4["printDetails"]= function printDetails() {
//     console.log(".......Printing Details........")
//     console.log(Person4.name);
//     console.log(Person4["address"]);
// }
// //Array     =[  0           1       2       3]
// let register = [Person1, Person2, Person3, Person4];

// // console.log(register[0]);
// // console.log(register[1]);
// // console.log(register[2]);
// // console.log(register[3]);
// // console.log(Person1);



// //function == verb



// // Functions are used to create code reuseable
// // printDetails(Person1);
// Person1.printDetails();
// // printDetails(Person2);
// Person2.printDetails();
// // printDetails(Person3);
// Person3.printDetails();
// // printDetails(Person4);
// Person4.printDetails();



// // add two numbers and squre the result



// function addAndSquare(number1, number2) {
//     console.log("....invoking the function....")
//     let result = (number1 + number2);
//     let squareOfResult = (result * result);
//     return squareOfResult;
//     //   console.log(squareOfResult);  //
// }


// //invoking function
// //function --> take inputs --> returnt a single value 


// let result = addAndSquare(10, 20);
// console.log(result);



// // you can not define more than one variable using let variable known as called block level scoping
// // javascript functions are firstclass values are they have the firstclass ctizenship
// // we can write a function under a variable 
// // So yo u can also write a function as a variable


// let subAndSquare= function(firstNumber,secoundNumber){
//     let substruction = (firstNumber-secoundNumber);
//     let squreOfSub = (substruction*substruction);
//     return squreOfSub;
// }
// let answer= subAndSquare(30,25);
// console.log(answer);








let Person1 = {
    name: "rajesh",
    address: "lakhimpur",
    age: 39,
    printDetails: function printDetails() {
        console.log("........Printing Details........");
        console.log(Person1.name);
        console.log(Person1["address"]);
    }
};

let Person2 = {
    name: "suresh",
    address: "lucknow",
    age: 49,
    printDetails: function printDetails() {
    
        console.log("........Printing Details........");
        console.log(Person2.name);
        console.log(Person2["address"]);
    }
};

let Person3 = {};
Person3.name = "sidharth";
Person3.address = "bihar";
Person3.age = 29;
Person3.printDetails = function printDetails() {
    console.log("........Printing Details........");
    console.log(Person3.name);
    console.log(Person3["address"]);
};

// console.log(Person3);

let Person4 = {};
Person4["name"] = "rajkumar";
Person4["address"] = "rawatpu";
Person4["age"] = 37;
Person4["printDetils"] = function printDetails() {
    console.log("........Printing Details........");
    console.log(Person4.name);
    console.log(Person4["address"]);
};


let register = [Person1, Person2, Person3, Person4];
// console.log(register[0]);

// function printDetails(personObj) {
//     console.log("........Printing Details........");
//     console.log(personObj.name);
//     console.log(personObj["address"]);
// }

// printDetails(Person1);
// printDetails(Person2);

//first add two no. then squre the result

function addAndSquare(number1, number2) {
    let addtion = number1 + number2;
    let result = addtion * addtion;

    return result;
}

let result = addAndSquare(2, 4);
console.log(result);

//funtction as a variable 

let substractandSquare = function (number1, number2) {
    let substruction = number1 - number2;
    let result1 = substruction * substruction;
    return result1;
}

let result1 = substractandSquare(6,4);
console.log(result1);

