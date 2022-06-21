//Any variable : assumes any vale can come through the variable
//thus can be problematic if appropriate values doesnt come for required function

let myVariable: any = "string1";
myVariable = 10;
myVariable = true;

console.log(myVariable);

//below functions doesn't through any error at the compile time
//as compiler doesn't assume it as error, but will break in runtime
/* console.log(myVariable.name)
myVariable()
myVariable.lenght() */

//Unknown variable: here ts consider that we had already handled the type error that may come in case of 
//type mismatch (type assertion or typecasting)

let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error

let myVariable2: unknown = 'abc'
//type assertion to treat myVariable2 as string
console.log((myVariable2 as string).toUpperCase())