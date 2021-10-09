let test = [];
let std = {id: 63130500000, name: 'KMUTT'};

console.log(test); //[]

//push() = add new value to lastest index in array
test.push(10);
test.push('Hello');
test.push(std);
let a = test.push(1000); //assign number of index to variable 'a'

console.log(a); //4
console.log(test); //[10, 'Hello', { id: 63130500000, name: 'KMUTT' }, 1000 ]

//fliter
let sort = value => value > 50;
let filtered1 = test.filter(sort); //filter array by calling variable that stored arrow function 
console.log(filtered1); //[ 1000 ]

let filtered2 = test.filter(value => value === 'Hello');//filter array by arrow function
console.log(filtered2); //[ 'Hello' ]

let filtered3 = test.filter(value => value <= 10); //filter array by arrow function
console.log(filtered3); //[ 10 ]

//pop() = remove lastest index of array
test.pop() //remove last index in array that is 10000
console.log(test); //[10, 'Hello', { id: 63130500000, name: 'KMUTT' }]

let x = test.pop() //bring the lastest index to assign in variable 'x' and remove value in array at the same time that is { id: 63130500000, name: 'KMUTT'}
console.log(x);

test.pop(); //remove 'Hello'
console.log(test); // [10]
