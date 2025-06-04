const EventEmitter=require("events");//EventEmitter is a class

const event=new EventEmitter();

event.on("myName",()=>{

    console.group("My name is Pratik Sanjay Ghule")
});

event.emit("myName")//to emit the event