// Function: - 

// fill the username
// fill the password - Locators changed
// click on login button

// 1. Named Function - Function Declaration

// 2. Anonymous Function (Unnamed function)  - Function expression
    // a. Anonymous function
    // b. Arrow Function =>

// Function Constructor - Classes - Named Function
// IIFE - Immediately invoked function expression - Anonymous
// Factory Function  - Objects - A function which return an object  - Named Function


// 1. Named Function - Function Declaration
// Definition:- 
// A function which will be declared along with the name. Function will be declare using the function keyword followed by the name of the function.

// Syntax:-
/*

function nameOfTheFunction(arguments: datatype....) : returnType{  // 
// code to be executed
}

JS - 
function nameOfTheFunction(arguments....) {  // 
// code to be executed
}

nameOfTheFunction(parameter)

*/

// 1. Parameterised function and non returning
function add(a :number ,b:number){
    console.log(a+b)
}

add(10, "TS")


// 2. parameterised function and returning

function add1(a:string, b: string) : string{
  //  console.log(a+b)
    return a+b
}

const sum = add1("Function in ", "Typescript")
console.log(sum)

// 3. Non parameterised function and returning

// 4. Non parameterised function and non returning



// 2. Anonymous Function - Function Expression (let i = function(){})
// Definition:-
// A function which will be declared without the name. Function will be declare using the function keyword followed (araguments)

// Syntax:-

/*
let variable = function(arguments :datatype.......) : returnType{
    // codes to be executed
}

variable(parameter)

*/

let userInfo = function(name : string, age :number){
    console.log(`Username is : ${name} and age is : ${age}`)
}

userInfo("Rahul", 25)
