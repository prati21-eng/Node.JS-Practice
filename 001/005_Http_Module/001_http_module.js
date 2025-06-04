const http = require("http");

const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    if(req.url === "/"){
        
        resp.write("<h1>Welcomaaaae to my home page</h1>")
        resp.end();
    }
    else if(req.url ==='/about'){
        resp.write("My name is praaaatik i am currently pesuing mcaa   ")
        resp.end();
    }
    else{
        resp.write("Not found");
        resp.end();
    }
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server listen on port ${PORT}`);
    
})