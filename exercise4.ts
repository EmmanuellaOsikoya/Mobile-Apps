let string1: string = ("Hello World!");
let num1: number = 2004;
let boolean1: boolean = false;
let array1: number[] = [1,2,3];
let any1: any = {x:0};

//run the different variables 
console.log(string1 + " " + num1 + " " + boolean1 + " " + array1 + " " + any1);

//to run code to console: tsc filename.ts and then node filename.js

//more on generic types
let myUnknown:any = "Unknown";
console.log("The value of myUnknown is: " + myUnknown);