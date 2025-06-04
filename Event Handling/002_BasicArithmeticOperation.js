const EventEmitter=require("events");

const event=new EventEmitter()

event.on("add",(a,b)=>{
    console.log("Addition of"+a+" and "+b+" is"+(a+b))
})
event.on("sub",(a,b)=>{
    console.log("Sunstraction of "+a+" and "+b+" is"+(a-b))
})

event.on("mul",(a,b)=>{
    console.log("Multiplication of "+a+" and "+b+" is"+(a*b))
})
event.on("div",(a,b)=>{
    console.log("Division of "+a+" and "+b+" is"+(a/b))
})


event.emit("add",10,20)
event.emit("sub",10,20)
event.emit("mul",10,20)
event.emit("div",10,20)
