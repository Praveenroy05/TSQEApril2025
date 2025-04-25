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

userInfo("Rahul", 25);


// 3. Arrow function (=>) - Small functions, one line function or for callback function
// Definition:-
// Arrow function is a small function which can be declared in one line. It is used to declare
// a small function which can be used as a callback function.

// When you are trying to write a single line of code inside the function, we do not even require to use curly braces {}
// If you have a single line of code and the function is returning something we do not even have to write return keyword for the function, it implcitly return the value
// If you have a single argument inside the function, you do not even require () to store the arguments

// Syntax:-

/*
let variable = (arugments....)  returnType(optional) => {
    // code to be executed
}

variable(parameter)

*/


let userInformation = (name, age) => {
    return (`Username is : ${name} and age is : ${age}`)
}

let result = userInformation("John", 30)
console.log(result);

let userInformation1 = (name, age) => (`Username is : ${name} and age is : ${age}`)

let result1 = userInformation1("Joe", 35);
console.log(result1);

let square = a => a**2
console.log(square(5));


// fill the username
// fill the password
// click on submit btn

// Assertion - 


// IIFE - Immediately invoked function expression - Anonymous
// Definition:-
// IIFE is a function which is invoked immediately after it is defined. It is used to declare
// a function which is invoked immediately after it is defined.

// Syntax: - 

/*

(function(argument){
    // code to be executed
})
()


*/

(function(id){
    console.log("Your id is : ", id)
}) 
(11)


// Factory Function

function functionName(name, color){
    return {
        name1: name,
        color1: color
    }
}

const obj = functionName("BMW", "Red")
console.log(obj.name1);
console.log(obj.color1);





