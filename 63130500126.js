//MUST "npm install prompt-sync" before RUN code
const prompt = require('prompt-sync')();

let num = [];

function Randoms(){
    for(i=0; i<3; i++){
         num[i] = Number(Math.floor(Math.random()*101))
    }
    return num;
}

function Sum(){
  var sumNum = 0;
  num.forEach(num => {
      sumNum += num;
  })
  return sumNum;
}

function Min(){
    var minNum = Math.min(...num);
    return minNum;
}

function Max(){
    var maxNum = Math.max(...num);
    return maxNum;
}

function ReRun(){
    menu = 0;
    menu = prompt('CHOOSE 1 or 2 or 3 or 4(end) :')
    return menu;
}

function Menu(){

  switch(Number(menu)){
    case 1 : 
        console.log("Sum :" + Sum());
        ReRun();
        Menu();
        break;
    case 2 :
        console.log("Min :" + Min());
        ReRun();
        Menu();
        break;
    case 3 :
        console.log("Max :" + Max());
        ReRun();
        Menu();
        break;
    case 4 :
        break;
    default :
        console.log("Oops,404 Not Found.");
        ReRun();
        Menu();
        break;
    }
}

Randoms();
console.log("Random Number:"+ num);
var menu = prompt('CHOOSE 1 or 2 or 3:');
console.log(num);
Menu();