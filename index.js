
//Module Function Wrapper
// (function(module, require, exports, __dirname, __filename) {
// })

const Logger = require("./logger");

//Init Object
const msgLogger = new Logger();

//Event Lister 
msgLogger.on('message', data => console.log('Message Looged:', data));

//Call the Event
msgLogger.log('Good Morning!');
msgLogger.log('How was your Night?');
msgLogger.log('Was great yours?');
msgLogger.log('Awesome, thank you.');


