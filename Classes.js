"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Classes here are just like java classes, that can have methods, varibles
//Access Modifiers  : depciting how accessible are class elements
//Public: (default) elements accessible everywhere
//Private: elements accessible only inside the claasss, not outside, not in derived classes
//Protected: elements accessible in the class, derived class, but not outside the classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
        this.companyName = 'NewCompany';
    }
    Employee.prototype.greetEmployee = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
//Class Manager extending Employee class , depicting an inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this; //Calling the base class constructor
    }
    Manager.prototype.managerTasks = function () {
        console.log("Manager Performing Tasks");
        console.log("company name is ".concat(this.companyName)); //Protected elements accessible here
        // console.log(`Employee Name is ${this.employeeName}`) //Private elements not accessible here
    };
    return Manager;
}(Employee));
var employee = new Employee('Robert');
// console.log(employee.employeeName) //Private elements not accessible here
employee.greetEmployee();
var manager = new Manager('Bob');
// console.log(manager.employeeName) //Private elements not accessible here
// console.log(`company name is ${this.companyName}`) //Protected elements not accessible here
//here all the methods from Employee Class (base Class) can also be accessed
manager.managerTasks();
manager.greetEmployee();
