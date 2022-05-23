const http = require('http');

const server = http.createServer((req, res) => {
    // res.write('Hello Node');
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html')
    res.end('<h1>Hello node!</h1>');
}).listen(4200 , () => console.log('Server is running'))