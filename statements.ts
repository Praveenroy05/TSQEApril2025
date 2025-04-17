// Statements - It allows us to execute the different block of code {...} based on different condition.

// if(2>1){
//     console.log("2 is greater than 1");
// }else{
//     console.log("2 is not greater than 1");
// }

// if statement
// if else statement
// if else if else statement
// Switch statement 
// Nested if else statement

// 1. if statement
// Syntax:-
// if(condition){...}

let a2 = "TS"
if(a2 ==="JS"){
    console.log("a2 is equal to TS");
}

//2. if else statement
// Syntax:-

/*
if(condition){
// code
}
else{
// code
}

*/
// definition:
// if condition is true then execute the code inside if block otherwise execute the code inside else block.

if(a2 ==="JS"){
    console.log("a2 is equal to TS");
}else{
    console.log("a2 is not equal to TS")
}


// 3. if else if else statement
// Defintion:
// if condition is true then execute the code inside if block otherwise check the else if condition if it is true then execute the code inside else if block otherwise execute the code inside else block.

// Syntax:-
/*
if(condition1){
// code
}else if(condition2){
 //code
}else if(condition3){
// code
}else{
// code
}

*/


let browser  = "opera"

if(browser === "chrome"){ // if("opera" === "chrome")
    console.log("browser is chrome");
}
else if(browser ==="firefox"){
    console.log("browser is firefox");
}
else if(browser === "safari"){
    console.log("browser is safari");
}
else{
    console.log("browser is not supported");
}


// Ranges (>=90) - marks >=80 && markes <90 - grade B
// Data type are different
// Logical Operator (&& ||)

console.log("************************************");

// 4. switch statement
// Definition:
// switch statement is used to execute the code based on the value of the variable.

// Syntax:-
/*

switch(expression){ // switch(browser)
case value1:
    // code
    break; // mandatory
case value2:
    // code
    break;
case value3:
    // code
    break;
default:
    // code
    break;
}


*/



let browserName :string = "safari"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("browser is chrome");
        break;
    case "firefox":
        console.log("browser is firefox");
        break;
    case "safari":
        console.log("browser is safari");
        break;
    default:
        console.log("browser is not supported");
        break;
}






