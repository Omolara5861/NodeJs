const eventEmitter = require('events');

//Create a class that extends the emitter
class MyEmitter extends eventEmitter {}

//Init the Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('lara', (e) => console.log('Logging', e));

//Init Event
myEmitter.emit('lara', {msg: 'Lara Got it!'});