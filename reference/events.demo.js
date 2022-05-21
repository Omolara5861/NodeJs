const eventEmitter = require('events');

//Create a class that extends the emitter
class MyEmitter extends eventEmitter {}

//Init the Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('lara', () => console.log('Lara Got it!'));

//Init Event
myEmitter.emit('lara');