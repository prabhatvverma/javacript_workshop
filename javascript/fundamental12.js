let numbers = [];
numbers.push(10, 30, 40, 50);
console.log(numbers);

//(push is used to push eliment in th last index of the array)
numbers.push(90);
console.log(numbers);

//(unshift is used to push eliment at the 0 index of the array)
numbers.unshift(35);

//(pop is used to remove eliment which is at the last of the index)
numbers.pop();
console.log(numbers);

//(pop will return a value  (it will remove the last eliment and return the same value))
let popedItem = numbers.pop();
console.log(popedItem);
console.log(numbers);

//(to itrate values one by one we use for each loop)
numbers.forEach(function(numbers){
    console.log(numbers);
});

function processItems(items, index){
    let newItem = items+1;
    console.log(newItem);
    
}
numbers.forEach(processItems);
console.log(numbers);

// new array creation and adding eliments in array
let numArray = [];
numArray.push(105,107,108,111);
console.log(numArray);

// adding both array in a single array using concination
let newArray = numbers.concat(numArray);
console.log(newArray);

//( we can also add numbers to existing array and exciting array with new name )
let addingArray = newArray.concat([5,7,8]);
console.log(addingArray);

// to clone arrray or create a duplicate array
let clonedArray = newArray.concat([]);
console.log(clonedArray);

clonedArray.pop();
console.log(clonedArray);