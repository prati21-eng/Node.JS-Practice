const EventEmitter =  require("events");
const emitter = new EventEmitter();

emitter.on("greet",(name)=>{
    console.log(`Greeting from ${name}`);
});

emitter.emit("greet","Pratik");