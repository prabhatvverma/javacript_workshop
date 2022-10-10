let student1 = {
    name: 'Adesh',
    marks: 80
};

let student2 = {
    name: 'Depankar',
    marks: "59"
};


function isEligible(student) {
    let flag = "false";
    console.log(student.marks);
    if (student.marks > 60) {
        flag = true;
    }
    return flag;
}

function interview(student, eligibilityTestMachenism) {
    let isEligible = eligibilityTestMachenism(student);
    console.log(isEligible);
    if (isEligible === true) {
        console.log('Eligible for Interview');
    } else {
        console.log('Not Eligible for interview');
    }
}

let isQualified = interview(student1, isEligible);
console.log(isQualified);

isEligible = interview(student2, isEligible);

function calculate(number1, number2, operation) {
    let result = operation(number1, number2);
    return result;
}

let sumOperation = function (number1, number2) {
    return number1 + number2;
};

console.log(calculate(3, 4, sumOperation));

let result2 = calculate(10, 20, function (number1, number2) {
    return number1 * number2;
});

console.log(result2);

let result3 = calculate(7, 5, function (number1, number2) {
    return number1 - number2;
});

console.log(result3);