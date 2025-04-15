// datatype - WHich defines what kind of data that a variable is storing

// 2 Types of data types:

// 1. Primitive data types - Only have a single

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined

    // 6. any
    // 7. union



// 2. Non-primitive data types - More than one values
    // 1. array
    // 2. object
    // 3. Functions ...


// 1. number - Represents both integers (67, -90) and floating point number (123.465464)
// keyword(var/let/const) variableName : datatype(optional) = value

let num : number= 123;
// typeof - will help us in indetifying the datatype of a variable
console.log(typeof num)
let num1 = 123.446457


// 2. string - Combination of characters - this, chracters

/*
1. SingleQuote ('') - String literal
2. DoubleQuote ("") - String literal
3. backtick (``) -  Template literal
*/

let singleQuote : string= 'JavaScript'
let doubleQuote : string = "JavaScript"

let backtick : string = `JavaScript`

let age = 10 // ${age}

let info = `You are of age ${age}`
console.log(info);

 let x : number= 10
 x  = "TS"
// console.log(x + y); // TS


// 3. boolean - true (1)/false (0)
console.log(2>10);

// 4. null  - Intentional absense of a value
let num2 :null = null

// 5. undefined - Variable is declared bit not assigned any value
let num3
console.log(num3)

// 6. any - any type of data can be assigned
let num4 : any = 10
num4 = "TS"
num4 = true
num4 = null
num4 = undefined



// 7. union - allows a variable to hold multiple data types
let num5 : (number | string |boolean) = 10
num5 = "TS"
num5 = true





// Type annotation - let i :number = 10
// Type Inference  -  let j = "TS"
// Type coercion  - 

let keyword :number = 10
let jet = "TS" 
