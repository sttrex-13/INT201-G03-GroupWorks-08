//คำนวนเลขแล้วหาออกมาว่าใส่เลขคู่หรือเลขคี่มั้ย
function add(a,b){ 
    return a + b;
}
function minus(a,b){
    return a - b;
}
function isOdd(n){
    return n % 2 === 1 ;
}
function isEven(n){
    return n % 2 === 0 ;
}

function check(a,b,fn1,fn2) { //หาเลขที่ต้องการหาลงในa, b fn1 ไว้ใส่ add or minus fn2 ไว้ใส่ isEven or isOdd
    return fn2(fn1(a,b));
}

let checkIsEven = check(2,3,add,isEven); 
let checkIsOdd1 = check(2,3,add,isOdd);
let checkIsOdd2 = check(3,10,minus,isOdd);

console.log('Example 1');
console.log(checkIsEven);
console.log('Example 2');
console.log(checkIsOdd1);
console.log('Example 3');
console.log(checkIsOdd2);

export { add, minus, isOdd, isEven, check };
import { users } from "./restParameter.mjs";
