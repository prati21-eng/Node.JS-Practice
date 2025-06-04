//-------OS Built in module in Node.js
//he os module in Node.js provides utilities for interacting with the operating system. It is a built-in module, so you don't need to install it separately.

const { log } = require("console");
const os = require("os");

console.log("Architecture",os.arch());
console.log("platform ",os.platform());
console.log("Free memory",os.freemem());
console.log("Type ",os.type());
console.log("Total Memory ",os.totalmem());
console.log("Platform ",os.platform);
console.log("Arrays contaning cpu details ",os.cpus())
console.log("Get the number of cpu cores ",os.cpus().length);

console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");
console.log("Total Memory:", os.totalmem() / 1024 / 1024, "MB");

console.log("Uptime:", os.uptime(), "seconds");
console.log("Home directory ",os.homedir());

console.log("Hostname of the system ",os.hostname());
console.log("Temp directory ",os.tmpdir());











