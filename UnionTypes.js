//Union Type: Ts let us associate multiple types with a variable, other than using 'any'
var multiType;
multiType = 10;
multiType = true;
var anyType;
anyType = 10;
anyType = true;
//Advantage of Union type
//1. Restricted to associated types only : 
//like string cannot be assigned to 'multiType' but can be with 'anytpe'
//
//2. Intellisense Support : 'multiType' will show all functions available for number
//and boolean, but 'anyType' won't
function display(item) {
    if (typeof (item) == 'number') {
        console.log("Square of number : ".concat(item * item));
    }
    else {
        console.log("The string is : ".concat(item));
    }
}
display(11);
display('TypeScript');
