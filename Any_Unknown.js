//Any variable : assumes any vale can come through the variable
//thus can be problematic if appropriate values doesnt come for required function
var myVariable = "string1";
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
var value;
var value1 = value; // OK
var value2 = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error
var myVariable2 = 'abc';
console.log(myVariable2.toUpperCase());
