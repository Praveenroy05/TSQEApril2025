// Array - 

let i = 10 

// There are 2 ways in which we can declare an array 
// 1. Using array literal - []
// Syntax:
// in JS
// let arrayName = [value1, value2, ......]

// in TS
// let arrayName :datatype[] = [value1, value2, value3]

let array : (string |number |boolean)[] = [10,20,30,40,50, "TS", true] // [0:10, 1:20, 2:30, 3:40, 4:50, 5: "TS", 6: true]
console.log(array);

let array1 : number[]= []

array1[0] = 10
array1[1] = 20
array1[2] = 30
console.log(array1);

// Syntax - arrayName[index]

console.log(array[0])
console.log(array[1])
console.log(array[2])

// length - Return the total number of element available inside an array
// Syntax:
// arrayName.length
console.log("length", array.length);

console.log("*********************************");
// for loop - 
for(let i = 0; i<array.length; i++){
    console.log(array[i], i);
}

console.log("*******************************");

//for...of loop 
// Syntax:

/*

for(variable of arrayName){
  // code ....
}


*/

//let array  = [10,20,30,40,50, "TS", true] // [0:10, 1:20, 2:30, 3:40, 4:50, 5: "TS", 6: true]


for(let ele of array){
    console.log(ele);
}

for(let ele in array){
    console.log(array[ele], ele);
}


// 2. Array Constructor  - new Array()
// Syntax:
// let arrayName = new Array(); 

let array2 = new Array<any>(23, 45, 67, 76, "TS", "JS")



console.log("***********************Methods of array**************************");
// 3-4 Interview Questions
// Diff between - push and unshift
let myArray = [10,20,30,40, "blue", "js", "ts", "apple", true]
console.log(myArray);

// 1. length - Return the total number of element available inside an array
// Syntax:
// arrayName.length
console.log("length", myArray.length);


// 2. push(element1, ele2,....) - Adds the element to the end of an array
// Syntax:
// arrayName.push(ele1, ele2, el3....)
myArray.push(50, "orange")
console.log("push", myArray);

// 3. pop() - Removes the last element from the array
// Syntax:
// arrayName.pop()
console.log(myArray.pop())
console.log("pop", myArray);

// 4. unshift(ele,.....) - Adds the element to the beginning of an array
// Syntax:
// arrayName.unshift(ele1, ele2, el3....)
myArray.unshift("Java", "Python")
console.log("unshift()", myArray);

// 5. shift()  - Removes the first element from an array
// Syntax:
// arrayName.shift()
myArray.shift()
console.log("shift()", myArray);
// myArray.shift()
// console.log("shift()", myArray);

// let myArray = ["Python", 10,20,30,40, "blue", "js", "ts", "apple", true]


// 6. splice(startIndex, numberOfElementToDelete, ele1, ele2, ele3)
// startIndex - The position where you want to add the element
// numberOfElementToDelete - The number of element that you want to delete from an array at the startIndex
// ele1, ele2, ele3 ... - THe elements that you want to add to the array at the startIndex

// Syntax:
// arrayName.splice(startIndex, numberOfElementToDelete, ele1, ele2, ...)

console.log(myArray.splice(2,3, "orange", "pink"))
console.log("splice()", myArray);

// 7. slice(startIndex, endIndex) - Returns the portion of an array
// startIndex - The position where you want to start the slice
// end index (exclusive) - The position where you want to end the slice
// Syntax:
// arrayName.slice(startIndex, endIndex)
console.log("slice()", myArray.slice());
console.log("slice(5)", myArray.slice(5));
console.log("slice(3,7)", myArray.slice(3,7));
console.log("slice(3,7)", myArray.slice(-4,-1));
console.log("slice(7,3)", myArray.slice(7,3));
myArray.splice(4, 0, 10)
console.log(myArray);

// 9. indexOf(element) - Return the index of an first occurances of an element from an array
// Syntax:
// arrayName.indexOf(element)
console.log(myArray.indexOf(10));
console.log(myArray.indexOf(20));


// 10. lastIndexOf(element) - Return the index of last occurance of an element from an array
// Syntax:
// arrayName.lastIndexOf(element)
console.log(myArray.lastIndexOf(10));
console.log(myArray.lastIndexOf(20));

//myArray[4] ="Modified"

// forEach(fun), map(fun), filter(fun), reduce(fun)

 let myArray1 = ["Python", 10,20,30,40, "blue", "js", "ts", "apple", true]

 // 11. forEach(function) - Will not return anything
 // Syntax:
 // arrayName.forEach(function(element, index, arrayName){.....})

 // element - The current element being processed in the array
 // index(optional) - The index of the current element being processed in the array
 // arrayName(Optional) - The array object itself

myArray1.forEach(function(element, index){
    console.log(element, index)
    //return element
})

// 12. map(function)  - Creates a new arrray with the result of calling the function on every element of an array
// Return the array with exactly the same number of element as similar to the orignal array

// Syntax:
// arrayName.map(function(element, index, arrayName){.....})

 // element - The current element being processed in the array
 // index(optional) - The index of the current element being processed in the array
 // arrayName(Optional) - The array object itself

let usd = [100,200,300,400,500]
let er = 87
let inr = usd.map(function(element){
        return element * er
})
console.log(inr)

// 13. filter(function) - Creates a new arrray with the result of calling the function on every element of an array
// Return the array with the same number of element or less than as similar to the orignal array

// Syntax:
// arrayName.filter(function(element, index, arrayName){.....})

 // element - The current element being processed in the array
 // index(optional) - The index of the current element being processed in the array
 // arrayName(Optional) - The array object itself

const sales = [
    {category :' fashion', sale : 200000},
    {category : 'Electornics', sale: 100000},
    {category: 'Mobile', sale : 50000}
]

let priceSale = sales.filter(function(a){
    return a.sale >=100000
})
console.log(priceSale);


// 14. reduce(function, initialValue (optional)) - Return the result as a single value
// Syntax:
// arrayName.reduce(fucntion(accumator, element, index, arrayName){....}, initialValue)

 // accumator  - The accumulated value that we get from the previous iteration
 // element - The current element being processed in the array
 // index(optional) - The index of the current element being processed in the array
 // arrayName(Optional) - The array object itself
 // initialValue(optional) - 

 let myArray2 = [12,45,34,56.78, 98]

 let sum = 0
 for(let i=0; i<myArray2.length; i++){
    sum = sum + myArray2[i] // sum = 0+12 = 12, sum = 12+45 = 57+34
 }
 console.log(sum);

 let total = myArray2.reduce(function(sum, num){
    return sum * num
 })
 console.log(total);











