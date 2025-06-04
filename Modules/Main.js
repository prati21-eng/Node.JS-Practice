const pack=require("./math")//./ means current working directory if we didnt write ./ the it searches the module in the node packages
//another method to import package
const {add,sub,mull,div}=require("./math")
console.log("Additon",add(10,29))
console.log("Substraction",sub(110,10))
console.log("multiplication",mull(10,20))
console.log("Division",div(10,3))