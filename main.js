"use strict";
exports.__esModule = true;
var hello = "Hello World";
console.log(hello);
//or alternativelt
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
var num1 = null;
var string1 = undefined;
//array
var list1 = [1, 2, 3];
var list2 = ["react", "typescript", "javascript"];
// both ways are correct
// console.log(list2);
//Tupple: combo of two types, but limited items
var person1 = ["shreyash", 22];
console.log(person1);
//enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Purple"] = 1] = "Purple";
    Colors[Colors["Green"] = 5] = "Green";
    Colors[Colors["Blue"] = 6] = "Blue";
})(Colors || (Colors = {}));
var color1 = Colors.Red;
var color2 = Colors.Purple;
var color3 = Colors.Green;
var color4 = Colors.Blue;
console.log("Red : ".concat(color1, " Purple: ").concat(color2, " Green: ").concat(color3, " Blue: ").concat(color4));
//Any variable : assumes any vale can come through the variable
//thus can be problematic if appropriate values doesnt come for required function
var myVariable = "strin1";
myVariable = 10;
myVariable = true;
console.log(myVariable);
//below functions doesn't through any error at the compile time
//as compiler doesn't assume it as error, but will break in runtime
/* console.log(myVariable.name)
myVariable()
myVariable.lenght() */
