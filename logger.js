const eventEmitter = require('events');
const uid = require('uuid');

class Logger extends eventEmitter {
    log(msg) {
        //Init Logger
        this.emit('message', {id: uid.v4(), msg});
    }
}

module.exports = Logger;