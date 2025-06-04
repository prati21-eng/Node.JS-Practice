
const fs = require("fs")
// const fs = require("fs/promises")



const filepath = __dirname;

//reading how many files inthe directory
fs.promises
.readdir(filepath)
.then((data)=>{console.log("Data :",data)})
.catch((err)=>{console.log("Error",err)})
.finally(()=>{console.log("Always Executed finally block");
})

//----CRUD Operation on the file using Promises ----
//creation

fs.promises
.writeFile("one.txt","These is first file",'utf-8')
.then(()=>{console.log("File created successfuly");
})
.catch((err)=>{console.log("Error Occured",err);
})
.finally(()=>{console.log("Finally block always Executes");
})

//reading file 
fs.promises
.readFile("one.txt",'utf-8')
.then((data)=>{
    console.log("Data Of the file :",data);
})
.catch((err)=>
{
    console.log("Error occured",err);
    
})

//copy one file data into another file
fs.promises
.readFile("one.txt",'utf-8')
.then((data)=>{
    fs.promises.writeFile("two.txt",data,"utf8")
    .then(()=>{console.log("Secod File Created sucessfully");
    })
    .catch((err)=>{
        console.log(err);
        
    })
})
.catch((err)=>
{
    console.log("Error occured",err);
    
})

//updation of the file
fs.promises
.appendFile("one.txt","Updated data")
.then(()=>{console.log("Updatred Successfully");
})
.catch((err)=>{console.log(err)})

//deletion of the file 

fs.promises.unlink("two.txt")
.then(()=>{
    console.log("File deleted");
    
})
.catch((err)=>{
    console.log(err)
})