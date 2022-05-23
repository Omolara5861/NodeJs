//Module Function Wrapper
// (function(module, require, exports, __dirname, __filename) {
// })
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 1908;

const server = http.createServer((req , res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
    else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))