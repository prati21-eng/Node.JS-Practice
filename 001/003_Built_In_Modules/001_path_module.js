// The path module in Node.js provides utilities for working with file and directory paths. It is a built-in module, so you don't need to install it separately.The path module in Node.js provides utilities for working with file and directory paths. It is a built-in module, so you don't need to install it separately.

const path = require("path");

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder","students","marks.txt");
console.log(filepath);

const parseData = path.parse(filepath);
const resolvePath = path.resolve(filepath);
const extName = path.extname(filepath);
const baseName  = path.basename(filepath);
const directoryName = path.dirname(filepath);

console.log({parseData,resolvePath,extName,baseName,directoryName});

