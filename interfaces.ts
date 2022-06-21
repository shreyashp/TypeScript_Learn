export{}
interface Employee {
    name: string ;
    id: number;
    location: string;
    developer?: boolean;
}

//Typescript Function 
// function addition(num1: number, num2: number) : number {
//     return num1 + num2;
// }

// console.log(addition(5,10))

//Function with optional parameter
// function addition(num1: number, num2?: number) : number {
//     if(num2){
//         return num1 +  num2
//     }
//     return(num1+100)
// } 

// console.log(addition(5))

//Function Implementing demo of Interface
function employeeTrack(employee: Employee) {
    const {name,id,location,developer} = employee;
    console.log(`name: ${name}, id: ${id} , location: ${location}`)
    developer ? console.log(`${name} is a developer`) : console.log(`${name} is normal employee`)
}

let person: Employee = {
    name: 'MyName',
    id: 123,
    location: 'Mycity',
}

employeeTrack(person)