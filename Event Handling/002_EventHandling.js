const EventEmitter = require("events");
// we can create multiple events with same name in nodejs
const event =new EventEmitter();
event.on("myName",()=>{
    console.log("Pratik");
});
event.on("myName",()=>{
    console.log("Pratik");
});
event.on("myName",()=>{
    console.log("Pratik");
});

event.emit("myName")
//listeners() returns an array of the specified event.
console.log(event.listeners("myName"))