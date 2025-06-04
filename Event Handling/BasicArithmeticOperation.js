const EventEmitter=require("events");
const event=new EventEmitter()
event.on("add",(a,b)=>{
    console.log(`The addition of ${a} and ${b} is ${a+b}`)
});
event.on("substract",(a,b)=>{
    console.log(`The substraction of ${a} and ${b} is ${a-b}`)
});
event.on("multiplication",(a,b)=>{
    console.log(`The multiplication of ${a} and ${b} is ${a*b}`)
});
event.on("division",(a,b)=>{
    console.log(`The division of ${a} and ${b} is ${a/b}`)
});
event.emit("add",10,20);
event.emit("substract",10,20)
event.emit("multiplication",10,20)
event.emit("division",10,20)