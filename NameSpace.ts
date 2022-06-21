//IMPORTANT:: To run this code type in terminal
// tsc NameSpace.ts --outfile out.js
// then type node out.js
//this is because namespace creation needs us to setup another named output file to run

//NameSpace here is a way of organizing and structuring code,
//When code have multiple elements for same usability , they can be put under same namspace for optimum
//code handling

/// <reference path = './NmUtils.ts'/>
namespace EmployeeUtility {

    //every elements from namespace are exported to access them outside it
    export class EmployeeData extends NamespaceUtils.EmployeeDataHelper implements NamespaceUtils.EmpInterface{

        getData(){
            console.log(`Employee Name : ${this.name}, Employee Id : ${this.id}`)
        }
    }
}

let employee : EmployeeUtility.EmployeeData = new EmployeeUtility.EmployeeData()
employee.setData('George',213)
employee.getData()
