//Module Function Wrapper
// (function(module, require, exports, __dirname, __filename) {
// })
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 1908;

const server = http.createServer((req , res) => {

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))