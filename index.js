//Module Function Wrapper
// (function(module, require, exports, __dirname, __filename) {
// })

const Logger = require("./logger");
const fs = require('fs');
const path = require('path');

//Init Object
const msgLogger = new Logger();

//Event Lister 
msgLogger.on('message', data => {
    //Created a folder to store the Logged messages
    fs.mkdir(path.join(__dirname, 'messages'), {}, err => {
        if(err) throw err;
        console.log('Folder Created!');
    })

    //Created a file to log the messages
     fs.writeFile(path.join(__dirname, 'messages', 'messages.txt'), '', err => {
        if(err) throw err;
        console.log('File Created!');
    })

    //Logging messages to the file
    fs.writeFile(path.join(__dirname, 'messages', 'messages.txt'),`Message Logged: ${JSON.stringify(data)}`, err => {
        if (err) throw err;
        console.log('Message Logged!');
    })

    //Appending More messages to the file
       fs.appendFile(path.join(__dirname, 'messages', 'messages.txt'),`Message Logged: ${JSON.stringify(data)}`, err => {
        if (err) throw err;
        console.log('Messages Appended!');
    })
})


//Call the Event
msgLogger.log('When you have a dream, you\'ve got to grab it and never let go')
// msgLogger.log(' There is nothing impossible to they who will try');
msgLogger.log(' The bad news is time flies. The good news is you’re the pilot.');
msgLogger.log(' Keep your face always toward the sunshine, and shadows will fall behind you.');
msgLogger.log(' Life has got all those twists and turns. You’ve got to hold on tight and off you go.');
msgLogger.log(' Keep your face always toward the sunshine, and shadows will fall behind you.');
msgLogger.log(' Success is not final, failure is not fatal: it is the courage to continue that counts.');