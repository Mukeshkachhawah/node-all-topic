const EventEmmiter = require("events");
const eventEmitter = new EventEmmiter();

eventEmitter.on("start", () => {
  console.log("Started");
});

eventEmitter.emit("start");
