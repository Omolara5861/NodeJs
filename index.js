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
})


//Call the Event
// msgLogger.log('Good Morning!');
// msgLogger.log('How was your Night?');
// msgLogger.log('Was great yours?');
// msgLogger.log('Awesome, thank you.');
msgLogger.log('When you have a dream, you\'ve got to grab it and never let go')