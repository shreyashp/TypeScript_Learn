//Union Type: Ts let us associate multiple types with a variable, other than using 'any'
export{}
let multiType: number | boolean
multiType = 10
multiType = true

let anyType: any 
anyType = 10
anyType = true

//Advantage of Union type
//1. Restricted to associated types only : 
//like string cannot be assigned to 'multiType' but can be with 'anytpe'
//
//2. Intellisense Support : 'multiType' will show all functions available for number
//and boolean, but 'anyType' won't

function display(item : number | string) {
    if(typeof(item) == 'number'){
        console.log(`Square of number : ${item*item}`)
    }
    else{
        console.log(`The string is : ${item}`)
    }
}

display(11)
display('TypeScript')
