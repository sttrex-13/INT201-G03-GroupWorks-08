//console.log("----------ARRAY destructuring with REST---------------");
console.log("------------------")
// array destructuring with rest
const users = [
    'pch', 'spp', 20, 
    { weight: 55, height: 155, dob: '30-12-21' }
] ; // assign array object into users variable
const [firstname, lastname, age, ...other] = users ; // array destructuring with rest (assign values of users object into variables respectively (...other = rest parameter))
console.log("Example 1 : show values of users" ) ;
console.log("name : " + firstname + " " + lastname) ; 
console.log(other) ;  // show other values of users

// export
export { users } ;

// import
console.log("Example 2 : import add function") ;
import { add } from "./higherOrderFunc.mjs";
console.log(add(age,users[3].weight)) // use add function that calling from higherOrderFunc.mjs for addition of age and weight.

console.log("Example 3 : import minus function") ;
import { minus } from "./higherOrderFunc.mjs";
console.log(minus(users[3].height,users[3].weight)) //use minus function that calling from higherOrderFunc.mjs for subtraction of height and weight.
