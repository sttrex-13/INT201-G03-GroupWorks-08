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



// weight - height

    // console.log(minus(1,5))
//import { add } from "./higherOrderFunc.mjs";

// // rest with function and other arguments
// function func(a,b,...c){
//     console.log("----------REST with others---------------");
// 	console.log(`${a} ${b}`); //p m
// 	console.log(c); //[ 'bbbbb', 'qawe', 'jsjs' ]
// 	console.log(c[0]); //bbbbb
// 	console.log(c.length); //3
// 	console.log(c.indexOf('jsjs')); //2
// }
// func('p','m','bbbbb','qawe','jsjs');
// export { func } ;





// console.log("---------OBJECT destructuring with REST----------------");
// // object destructuring with rest
// const users2 = {
//     firstname2 : 'pch', 
//     lastname2 : 'spp', 
//     age2 : 20,
//     info2 : { weight2: 22, height2: 132, dob2: '30-12-21' }
// }
//     const {firstname2, lastname2, age2, ...other2} = users2
//     console.log("firstname : " + firstname2) // firstname : pch
//     console.log("lastname : " + lastname2) // lastname : spp
//     console.log("name : " + firstname2 + " " + lastname2) // name : pch spp
//     console.log("age : " + age2 + " years old") // age : 20 years old
//     console.log(other2) // { info2: { weight2: 22, height2: 132, dob2: '30-12-21' } }
