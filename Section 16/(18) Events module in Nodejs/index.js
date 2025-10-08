const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("Walter White");
});

event.emit("sayMyName");

event.on("paramsfunc", (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old`);
})

event.emit("paramsfunc","John",24);