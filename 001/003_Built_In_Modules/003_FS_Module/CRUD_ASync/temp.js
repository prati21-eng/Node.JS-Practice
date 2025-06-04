const { log } = require("console");
const fs = require("fs");
//creating the file using aync
fs.writeFile("one.txt","These is file one by pratik",'utf-8',(error)=>{
        if(error){
            console.log("Some error occured", error);
            
        }
        else{
            console.log("File created successfully");
            
        }
});

//reading the file
fs.readFile("one.txt",'utf-8',(error,data)=>{
    if(error){
        console.log("Some error occured", error);
        
    }
    else{
        console.log("File Read successfully data : ",data);
        
    }
});

//updation

fs.appendFile("one.txt","\n This is updated data",'utf-8',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Successfully updated");
        
    }
});

//deletion of the file
fs.unlink("one.txt",(error)=>{
    if(error)
        console.log(error);
    else
        console.log("file deleted");
        
});