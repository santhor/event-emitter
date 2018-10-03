const EventEmitter = require('./event-emitter');
const eventEmitter = new EventEmitter ();

// 1. Add a listener to the 'greet' event.
eventEmitter.on('greet', () => {
    console.log('Welcome to Node Fest!!');
});

// 2. Add another listener for the same 'greet' event.
eventEmitter.on('greet', () => {
    console.log('Node session 2!!');
});

console.log('Hello');

// 3. Trigger/emit the 'greet' event.
eventEmitter.emit('greet');
