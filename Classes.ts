export{}
//Classes here are just like java classes, that can have methods, varibles

//Access Modifiers  : depciting how accessible are class elements
//Public: (default) elements accessible everywhere
//Private: elements accessible only inside the claasss, not outside, not in derived classes
//Protected: elements accessible in the class, derived class, but not outside the classes

class Employee {

    private employeeName: string; //only accessible in this class
    protected companyName: string;

    constructor(name: string){
        this.employeeName = name
        this.companyName = 'NewCompany'
    }

    greetEmployee(){
        console.log(`Hello ${this.employeeName}`)
    }
}

//Class Manager extending Employee class , depicting an inheritance
class Manager extends Employee {
    constructor(name: string){
        super(name) //Calling the base class constructor
    }


    managerTasks(){
        console.log(`Manager Performing Tasks`)
        console.log(`company name is ${this.companyName}`) //Protected elements accessible here
        // console.log(`Employee Name is ${this.employeeName}`) //Private elements not accessible here
    }
}

let employee: Employee = new Employee('Robert')
// console.log(employee.employeeName) //Private elements not accessible here
employee.greetEmployee()

let manager : Manager = new Manager('Bob')
// console.log(manager.employeeName) //Private elements not accessible here
// console.log(`company name is ${this.companyName}`) //Protected elements not accessible here

//here all the methods from Employee Class (base Class) can also be accessed
manager.managerTasks()
manager.greetEmployee()