const readline=require("readline-sync");

let str=readline.question("Enter the string :")

let lstr=str.toLowerCase();
let ustr=str.toUpperCase();
console.log("Enterd string is ",str)
console.log("Lower case :",lstr)
console.log("Upper case :",ustr)