var events = require("events");
var eventEmitter = new events.EventEmitter();

const listenera = () => {
  console.log("listener a");
};

const listenerb = () => {
  console.log("listener b");
};

// eventEmitter.addListener('connection', listenera)
// eventEmitter.on('connection', listenerb)
// eventEmitter.emit('connection')

let arr = [listenera, listenerb];

arr.forEach((n) => {
  eventEmitter.on("connection", n);
});

arr.forEach((n) => {
  if (n === listenera) {
    eventEmitter.removeListener("connection", n);
  }
});
eventEmitter.emit("connection");
console.log("Event emitter end");
