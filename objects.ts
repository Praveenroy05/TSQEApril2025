// Object: - Objects are collection of key-value pair inside {name : "Rahul"}

// let obj = new ClassName(param)


// 1. Literal Object - {key: value} - JS/TS
// 2. Inline Type Object - TS
// 3. Using type aliases - TS
// 4. Using interface - TS
// 5. Using class - JS/TS
// 6. Constructor Function - JS/TS
// 7. Factory Function - JS/TS


// 1. Literal Object 
// Syntax:
// let obj = {key: value, function : Function}


// Accessing the values from an object
// Syntax:
// 1. objectName.property
// objectName.functionName()

// 2. objectName["key"]

let person = {
    name1 : "John",
    age : 35,
    city : "NY",
    isEmployee : true,
    personInfo : function(){
        console.log("Name is: ", this.name1, "age is: ", this.age, "city is: ", this.city, "Is Employee: ", this.isEmployee);
    }
}


// object - 
// this
//person.name1 = person.name

console.log(person.name1);
console.log(person.age);
person.personInfo()

person["personInfo"]()

// for ...in loop
// Syntax:
// for(variable in object){....}

for(let key in person){
    console.log(person[key]);
}

// 2. Inline Type Object - TS
// Syntax:
// let obj: {key: datatype, function: Function} = {key: value, function: Function}

let person1 : {name : string, age: number, city: string, fun : Function}

= {
    name : "John",
    age : 35,
    city : "NY",
    fun : function(){
        console.log("Name is: ", this.name, "age is: ", this.age, "city is: ", this.city);
        }
}

// 3. Using type aliases - TS
// Syntax:
/*
type Person = {
    name : string,
    age: number,
    city: string,
    fun : () => void
}

*/

type Person = {
    name : string,
    age: number,
    city: string
}

let person2 : Person = {name : "Rahul", age : 50, city : "Delhi"}
let person3 : Person = {name : "Jay", age : 40, city : "NY"}


// 4. Using interface - TS
// Syntax:
// interface Person {key: datatype}

interface PersonInterface {
    name : string,
    age: number,
    city: string
}

// interface PersonInterface {
//     fun :Function
// }

interface Employee extends PersonInterface {
    salary : number
}


let person4 : PersonInterface = {name : "Raj", age : 60, city : "Mumbai"}
let person5 : PersonInterface = {name : "Kiran", age : 30, city : "Pune"}

let person6 : Employee= {name : "John", age : 20, city : "London", salary : 1000000}


// 6. Constructor Function
// Syntax:

/*

function FunctionName(param1: datatype, param2 :datatype){
    this.name  = param1
    this.age = param2
}

let obj = new FunctionName(param1, param2)
obj.name
obj.age

*/

function Car(make, model, year){
    this.make = make // this.make = BMW
    this.model = model // this.model = i7
    this.year = year // this.year = 2024
}

let car1 = new Car("BMW", "i7", 2024)
console.log(car1)

// 7. Factory Function - A function which return an object
// Syntax:

/*

function functionName(arguments){
    return {
    key: value,
    key1: value
    }
}


*/

function functionName1(name, color){
    return {
        name1: name,
        color1: color
    }
}

const obj1 = functionName1("BMW", "Red")
console.log(obj1);
console.log(obj1.name1);
console.log(obj1.color1);


// 4. Classes





