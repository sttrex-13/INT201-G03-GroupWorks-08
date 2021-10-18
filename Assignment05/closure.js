//closure feature
//Example 1 increse number for each time
function count() {
    var counter = 0;
    return function() {
        counter += 1; // bring counter that freezing value + 1 and assign to same counter
        return counter; 
    }
}

var plus = count(); //assign function count into variable plus
console.log("Example 1");
console.log(plus()); // call function count for 1st time(count = 0) then + 1 => new count = 1 
console.log(plus()); // call function count for 2nd time(count = 1) then + 1 => new count = 2
console.log(plus()); // call function count for 3th time(count = 2) then + 1 => new count = 3

console.log("_____________________________\n");

//Example 2 Word plus

function message(msg1){
    function show(msg2 = " there."){
        return msg1 + msg2; //msg1 from parent function plus msg2 from this function
    }
     return show;
}

console.log("Example 2 : Closure + Export");
let ex2 = message("Hi! ");  //assign function message into variable ex2
console.log(ex2("My")); // input parameter of show
let ex3 =  message("What are you doing ");  //assign function message into variable ex3
console.log(ex3(",Hmm") + "?");// input parameter of show

//Export
 export { message };

console.log("_____________________________\n");

//Example 3 

console.log("Example 3 : Testing import");
//import from restParameter.mjs
import { users } from './restParameter.mjs';

let ex4 = message("Hi! "); //assign function message into variable ex4
console.log(ex4(users[1])); // input parameter of show that calling array users form restParameter.mjs


