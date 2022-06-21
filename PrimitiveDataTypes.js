"use strict";
exports.__esModule = true;
var hello = "Hello World";
console.log(hello);
//or alternatively
/* {
    let name = "shreyash"
    console.log(name)
} */
var x = 10; //let can be used without initialization
var y = 20; //const variable should be decalred and initialized
//Advantages of type checking
//1. static type checking, which avoids abrupt breakage
//of code during runtime
//2. intellisence, based on data type appropriate
//functions are suggested
//data types
var isTrue = true;
var num = 10;
var name = "shreyash";
var sentence = "My name is ".concat(name, " \nand I learn TypeScript");
console.log(sentence);
//null and undefined types
var a = null;
var b = undefined;
//null and undefined can be respectively used with
//number and string types
// let num1: boolean = null;
// let string1: string = undefined;
//Type Inference: TS by itself consider type of variable if not explicitley mentioned
var var1;
var1 = 10;
console.log(typeof (var1));
//Here Intellisence won't work as the type is not strictly associated
var1 = 'abc';
console.log(typeof (var1));
//But if variable is initialized at time of declaration , then type wouldn't be changed
var var2 = 10;
//var2 = 'abc' //error : Type 'string' is not assignable to type 'number'.
console.log(var2);
var2.toString(); //here itellisense worked as type is associated
