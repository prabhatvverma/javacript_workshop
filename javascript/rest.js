function sumOne(a, b) {
    return a + b;
}

var myArray = [5, 6];
//  console.log(sumOne(5,6));

console.log(sumOne(...myArray));  //(spread operator) it takes the gruop and tryes to change n to multiple values
// rest simply  convert the bunch of values in to a array(group) 
// spread will change group values in to multiple or bunch values

function sumTwo(a, b, ...args) {
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg; //sum = sum + arg; 
    }
    return [sum, multi];
}

console.log(sumTwo(10, 5, 6, 7, 12, 12, 1, 21));