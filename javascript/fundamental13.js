class student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

function dummyStudents() {
    let students = [];
    students.push(new student('anjali', 35));
    students.push(new student('ramesh', 75));
    students.push(new student('sidharth', 85));
    students.push(new student('shivam', 10));

    //without using class >>> object literal notation 
    students.push({ name: 'ayush', marks: 55 });
    return students;
}

let students = dummyStudents();
console.log(students);

//TO find elements from array
function isName(student) {
    console.log("Function called....");
    return student.name == "anjali";
}
let foundObj = students.find(isName);
console.log(foundObj);

// To find index no. of eliments
let objFoundAt = students.findIndex(isName);
console.log(objFoundAt);

//filter students that have marks more than 55
function marksGt55(students) {
    return students.marks > 55;
}

// This function reurns new array based on filter
let newStudentsGt55 = students.filter(marksGt55);
console.log(newStudentsGt55);

// //add 2 marks in students that have more than 75
// let studentsMarksgt55 = students.filter(function (student) {
//     return student.marks > 55; //(annonymous function >> dont need to give name of function )
// });

// // this function must return an object
// function add2(student) {
//     student.marks = student.marks + 2;
//     return student;
// }
// let newArrayWith2MoreMarks = studentsMarksgt55.map(add2);
// console.log(newArrayWith2MoreMarks);

// adding 2 extra no. that have more than 55 no.
let resultaintStudents = students.filter(function (student) {
    return student.marks > 55;
})
    .map(function (student) {
        student.marks + 2;
        return student;
    });

console.log(resultaintStudents);