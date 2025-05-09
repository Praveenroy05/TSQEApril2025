class Employees {
    // properties
 
    static CName = "ABC"

    constructor(eid, eName, eAge, eSalary){
        this.empId = eid,
        this.empName = eName,
        this.empAge = eAge,
        this.empSalary = eSalary
    }


    employeeInformation()  {
        console.log("Employee ID: ", this.empId)
        console.log("Employee Name: ", this.empName)
        console.log("Employee Age: ", this.empAge)
        console.log("EMployee Salary: ", this.empSalary);
        console.log("Company Name: ", Employee.CName);
    }

    static greetings(){
        return (`Welcome to ${Employee.CName} company`);
    }

}