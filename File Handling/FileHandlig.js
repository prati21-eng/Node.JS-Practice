const fs=require("fs");//importing the fs module that is essentila for file handling
//synchronus writing the file
//fs.writeFileSync("./data.txt","Hello Worls!!!")

//writing the file asynchronously 
//it doesnt return anything it take one call back function as argument
//fs.writeFile("./data.txt","My name is pratik",(err)=>{})


//reading file synchronously doesont return anything take a call back function
//utf-8 is mandatory for reading data in string format
// fs.readFile("./data.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log("Error occured",err)
//     }
//     else{
//         console.log("File data : ",data)
//     }
// })


// Reading file synchronously
//it return the file data 
const result=fs.readFileSync("./data.txt","utf-8")
console.log("Result is :",result)

//appending the
//fs.appendFileSync("./data.txt","From Sangamner")

//fs.appendFile("./data.txt","Techno",(err)=>{})


//copy file data from one file to another file
// fs.writeFileSync("./copy.txt",result)

//to delte the file unlink function is used
//fs.unlinkSync("./copy.txt");

// fs.unlink("./copy.txt",(err)=>{
//     if(err)
//     {
//         console.log("Error occured")
//     }
//     else{
//         console.log("FIle deleted successfully")
//     }
// })


// console.log(fs.statSync("./data.txt"))



// const os=require("os")
// console.log(os.cpus().length)