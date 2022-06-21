"use strict";
exports.__esModule = true;
// function addition(num1: number, num2: number) : number {
//     return num1 + num2;
// }
//optional parameter
// function addition(num1: number, num2?: number) : number {
//     if(num2){
//         return num1 +  num2
//     }
//     return(num1+100)
// } 
// console.log(addition(5))
function employeeTrack(employee) {
    var name = employee.name, id = employee.id, location = employee.location, developer = employee.developer;
    console.log("name: ".concat(name, ", id: ").concat(id, " , location: ").concat(location));
    developer ? console.log("".concat(name, " is a developer")) : console.log("".concat(name, " is normal employee"));
}
var person = {
    name: 'Shreyash',
    id: 123,
    location: 'pune'
};
employeeTrack(person);
