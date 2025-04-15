// variable - Storage - Which stores either a single value or multiple values

// int i = 10
/*
1. var -  In Modern JS/TS we do not use var keyword
2. let - Whenever we know that value of the variable can change
3. const - Which is use to declare constant variable
*/

//Syntax:
// TS
// keyword(var/let/const) variableName : datatype(optional)= value

// JS
// keyword(var/let/const) variableName = value



// var
// 1. Scope - Global or functional
// 2. Variable declared using a var keyword can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of a variable at the time of declare

var k = 40
var k =100
var k ="TS"

var k;
k = 500

console.log("Line# 27", k);


var k = 40
console.log("Line# 35", k);


var j = 10 
console.log(j) 
j = 40
console.log("line #28", j)

// Global and local scope

function add(){
    var k = 20 // local scope
    console.log(k)
    console.log("Line #35", j);
}

add()
console.log("line # 39",j)

// block of code -- {...}


var flag = true // global

if(2>1){
    var flag = false // local variable
}

console.log(flag) // false


console.log("***************************");
// let - 
// 1. Scope - Block level {...}
// 2. Variable declared using a let keyword cannot be redeclared but can be reinitial
// 3. It is not mandatory to assign the value of a variable at the time of declare


let l // global 
l = 90

const flag1 = true // global
// let flag1 = false

if(2>1){
    const flag1 = false // local variable
    console.log(flag1)  // false
}
 console.log(flag1);
 //console.log(flag2)  // false


// const 
// 1. Scope - Block level {...}
// 2. Variable declared using a const keyword cannot be redeclared and cannot be reinitialised
// 3. It is mandatory to assign the value of a variable at the time of declare


const variable = 100
//const variable = 90 


// var
// 1. Scope - Global or functional
// 2. Variable declared using a var keyword can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of a variable at the time of declare

// let - 
// 1. Scope - Block level {...}
// 2. Variable declared using a let keyword cannot be redeclared but can be reinitial
// 3. It is not mandatory to assign the value of a variable at the time of declare

// const - 
// 1. Scope - Block level {...}
// 2. Variable declared using a const keyword cannot be redeclared and cannot be reinitialised
// 3. It is mandatory to assign the value of a variable at the time of declare




