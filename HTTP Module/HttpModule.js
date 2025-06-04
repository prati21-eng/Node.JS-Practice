const http=require("http")
// const readline=require("readline-sync")
const server=http.createServer((req,res)=>
{
    //a=readline.question("Enter")
    res.write("Hello World")
    res.end()
    
});

server.listen(3000)