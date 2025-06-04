const fs = require("fs");

fs.writeFileSync("one.txt","My first file that i created usinf synchronous operationin node.js","utf-8");
//reading + copy
fs.writeFileSync("two.txt",fs.readFileSync("one.txt","utf-8"),"utf-8");

//updation
fs.appendFileSync("one.txt","\nMy first file that i created usinf synchronous operationin node.js","utf-8");

// deletion

// fs.unlinkSync("one.txt");


