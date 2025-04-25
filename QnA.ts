// Nested if else statement
// import * from 'readline'
const prompt = require('prompt-sync')();
let value = Number(prompt("Enter a value"))
if(value > 5){
    console.log("Value is > 5");
}else{
    console.log("Value is < 5");

}
 

// 0, "", null, undefined, NaN - False
let k = Boolean("t")
console.log(k);
