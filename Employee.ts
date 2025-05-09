// Class - ES6 (ECMA SCRIPT 6 - 2015)
// Syntax:

/*

class ClassName {

// propeties 

key1 : datatype,
private key2 " datatype",

static key3 : datatype

constructor(key1:datatype, key2: datatype) {
    this.key1 = key1;
    this.key2 = key2;
}

// methods
method1() :returnType{
}

static method2() : returnType{....}

}

// ClassName obj = new ClassName(param) - Java

let obj = new ClassName(param1, param2)
obj.key1
obj.method1()

// Static  - Prop and method
ClassName.key3
ClassName.method2()

*/

// 1. Constructor - you have create a constructor by using a keyword know as constructor in both JS and TS
// 2. Static keyword belongs to Class and not to the object. That means to access the static properties and method you can directly access using the ClassName. Exampale - ClassName.key3
// 3. Non-static keyword belong to the instance of a class that is an object. To access the non static propeties and methods we have to creat an object of a class.
// 4. Constructor overloading is not possible in both JS and TS
// 5. Private variables and methods cannot be accessed outside of the class.
// 6. Properties declaration inside the class in mandatory in TS but not mandatory in JS

class Employee {
    // properties
    empId : number
    empName : string
    empAge : number
    private empSalary : number
    static CName = "ABC"
    readonly offer = 30000

    constructor(eid, eName, eAge, eSalary){
        this.empId = eid,
        this.empName = eName,
        this.empAge = eAge,
        this.empSalary = eSalary
    }


    employeeInformation() :void {
        console.log("Employee ID: ", this.empId)
        console.log("Employee Name: ", this.empName)
        console.log("Employee Age: ", this.empAge)
        console.log("EMployee Salary: ", this.empSalary);
        console.log("Company Name: ", Employee.CName);
    }

    static greetings(): string{
        return (`Welcome to ${Employee.CName} company`);
    }

}

let employee  = new Employee(101, "Rahul", 30, 400000)
console.log(employee.empName);
console.log(employee.empAge);
//console.log(employee.empSalary); //Cannot be accessible outside of the class

employee.employeeInformation();
console.log(Employee.CName);
console.log(Employee.greetings());
console.log(employee.offer);
// employee.offer = 50000


