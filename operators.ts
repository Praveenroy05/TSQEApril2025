// 1. Arithmetic OP - Mathematical caluclation
// 2. Comparison OP - Conditions
// 3. Logical OP - Validation of multiple condition
// 4. Assignment OP - Assigning value to variable


// 1. Arithmetic OP : -
    //1. Addition (+)
    //2. Subtraction (-)
    //3. Multiplication (*)
    //4. Division (/)
    //5. Modulus (%) - 
    //6. Exponentiation (**)
    //7. Increment Operator (++)
    //8. Decrement Operator (--)

    // 1. + 
    let a = "10" // String - "TS"
    let b = 20
    //console.log(Number(a)+String(b)) // "10"20
    console.log(Number(a)+b) // "10"20  - // Type conversion

    // 2. - (Subtraction)
    console.log(10-5) // 5
    console.log("10"-5) // 4.5 - Type coercion

    // 3. * (Multiplication)
    console.log(10*5) // 50

    // 4. / (division)
    console.log(10/2) // 

    // 5. % (modulus) - Remainder of the division
    console.log(10%2) 

    // 6. ** (Exponentiation) 
    let c = 5
    let d = 3
    console.log(c**d); // 5**3 // 5*5*5

    // 7. Increment OP (++) - It will increse the value of the variable by 1
    let e = 10
    // Pre-increment (++e) - First the value will be incremented and then the action will be performed
    console.log(++e)// 10 // ++10 // 11


    // Post increment (e++) - First action will be performed and then the value will be incremented
    let f = 5
    console.log(f++) // 5++ // 
    console.log(f) 

    // 8. Decrement OP (--) - It will decrease the value of the variable by 1
    let g = 10
    // Pre-decrement (--g) - First the value will be decremented and then the action will be performed
    console.log(--g) // 9

    // Post-decrement - First action will be performed and then the value will be decremented
    let h = 5
    console.log(h--) // 5
    console.log(h) // 4

console.log("****************************");

// 2. Comparision OP - Compares the two values and return the result as boolean (true or false)
    // 1. == (Equal to)
    // 2. != (Not Equal to)
    // 3. === (Strict Equal to)
    // 4. !== (Strict Not Equal to)
    // 5. > (Greater than)
    // 6. < (Less than)
    // 7. >= (Greater than or Equal to)
    // 8. <= (Less than or Equal to)


    // 1. == - Check if two VALUES are same or not 
    let i1 = "10"
    let i2 = 10
    console.log("Equal to", i1 == i2) // true

    // 2. != - Check if two VALUES are not same
    console.log("Not Equal to", i1 != i2) // false

   // 3. === - Compare the 2 VALUES are same or not along with the datat type of the variables 
   console.log("Strict Equal to", i1 === i2)

   // 4. !== 
   console.log("Strict Not Equal to", i1 !== i2)

   // 5. > - Check if the first value is greater than the second value
   console.log("Greater than", 10 > 5) // true

   // 6. < - Chek if the furst value is less than the second value
   console.log("Less than", 10 < 5) // false

   // 7. >= - Check if the first value is greater than or equal to the second
   console.log("Greater than or Equal to", 10 >= 10) // true

   // 8. <= - Check if the first value is less than or equal to the second
   console.log("Less than or Equal to", 10 <= 10) // true


// 3. Logical Operator: - Will validate 2 different expression (condition) and return the result as a boolean
    // 1. AND (&&) - Both the conditions should be true
    // 2. OR (||) - Either of the conditions should be true
    // 3. NOT (!) - Will negate the condition (true will become false and false will true)


    // 1. AND (&&) - Both the conditions should be true
    
    // true && true - true
    // true && false - false
    // false && true - false
    // false && false - false
    console.log("AND (&&)", (7>6) && (1>0))  // true && true
    console.log("AND (&&)", (7>6) && (1<0)) // true && false
    console.log("AND (&&)", (7<6) && (1>0)) // false && true
    console.log("AND (&&)", (7<6) && (1<0)) // false && false

    // 2. OR (||) - Either of the conditions should be true
    // true || true - true
    // true || false - true
    // false || true - true
    // false || false - false
    console.log("OR (||)", (7>6) || (1>0)) // true
    console.log("OR (||)", (7>6) || (1<0)) // true
    console.log("OR (||)", (7<6) || (1>0)) // true
    console.log("OR (||)", (7<6) || (1<0)) // false

    // 3. NOT (!) - Will negate the condition (true will become false and false will become true)
    console.log("NOT (!)", !(7>6)) // false
    console.log("Not (!)", !(0>1)) // true

    // 4. Assignment (=) - Assign the value to a variable
    let a1  = 10







