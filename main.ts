export {};
let hello = "Hello World";
console.log(hello);

//or alternativelt
/* {
    let name = "shreyash"
    console.log(name)
} */

let x = 10; //let can be used without initialization
const y = 20; //const variable should be decalred and initialized

//Advantages of type checking
//1. static type checking, which avoids abrupt breakage
//of code during runtime
//2. intellisence, based on data type appropriate
//functions are suggested

//data types
let isTrue: boolean = true;
let num: number = 10;
let name: string = "shreyash";

let sentence: string = `My name is ${name} 
and I learn TypeScript`;

console.log(sentence);

//null and undefined types

let a: null = null;
let b: undefined = undefined;

//null and undefined can be respectively used with
//number and string types
let num1: boolean = null;
let string1: string = undefined;

//array
let list1: number[] = [1, 2, 3];
let list2: Array<string> = ["react", "typescript", "javascript"];
// both ways are correct
// console.log(list2);

//Tupple: combo of two types, but limited items

let person1: [string, number] = ["shreyash", 22];
console.log(person1);

//enum
enum Colors {
  Red,
  Purple,
  Green = 5,
  Blue,
}

let color1: Colors = Colors.Red;
let color2: Colors = Colors.Purple;
let color3: Colors = Colors.Green;
let color4: Colors = Colors.Blue;

console.log(
  `Red : ${color1} Purple: ${color2} Green: ${color3} Blue: ${color4}`
);

//Any variable : assumes any vale can come through the variable
//thus can be problematic if appropriate values doesnt come for required function

let myVariable: any = "strin1";
myVariable = 10;
myVariable = true;

console.log(myVariable);

//below functions doesn't through any error at the compile time
//as compiler doesn't assume it as error, but will break in runtime
/* console.log(myVariable.name)
myVariable()
myVariable.lenght() */
