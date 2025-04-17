// Loops - Which will execute the same block of code {...} multiple time

console.log(1) //() {console.log()}
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("**********************")


console.log("**********************");

//1. for loop 
    //a. for loop - Traiditional for loop - If we know how many time we have to run the iteration 
    //b. for...of loop - Loop over arrays, strings - [1,2,3]
    //c. for...in loop - Loop over objects - { name:"Rahul" }
// 2. while loop - If we do not know how many times we have to execute the iteration
// 3. do while loop - If we want to execute the loop atleast on time before checking the condition


// 1. for loop - Traditional loop
// Syntax

/*
for(initialization, condition; increment/decrement){
// code
 break;
}

initialization - Initialise the variable to start the execution. Ex: - let i = 0
condition - Condition to check whether the loop should run or not. Ex: - i <= 10
increment/decrement - Increment or decrement the variable after each iteration. Ex: - i++/ i--


*/

for(let i = 1; i<=10; i++){ // 2++ = 2+1 = 3 10++ = 10+1= 11
    console.log(i) // 1 2 ..... 10
}

console.log("*****************");

// print from 5 to 1
for(let i =5 ; i>0; i--){
    console.log(i) // 5 4 3 2 1
    if(i==3){
        break
    }
}

console.log("***********************");

// while loop
// Syntax

/*
initialization
while(condition){
// code
increment/decrement
}

*/

let j1 = 0
while(j1>=20){
    console.log(j1)
    j1++ // 1
}

console.log("***********************");

// do while loop
// Syntax

/*

initialization
do{
// code
increment/decrement
}while(condition)

*/

let j2 = 10
do{
    console.log(j2)
    j2-- // 1
}while(j2>=1)






