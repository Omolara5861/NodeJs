//Module Function Wrapper
// (function(module, require, exports, __dirname, __filename) {
// })
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 1908;

const server = http.createServer((req , res) => {
    //Serving the Homepage
//     if(req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//     }
    //Serving the About Page
//     if(req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//     }
        //Serving a JSON file
//     if(req.url === '/api/users') {
//         const users = [
//             {'name': 'Nelson', 'age': 22, 'Nationality': 'Nigerian'},
//         {'name': 'Luciana', 'age': 24, 'Nationality': 'American'},
//         {'name': 'Priyanka', 'age': 27, 'Nationality': 'Indian'}
//     ];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(users));
// }

    //Renndering Pages Dynamically
    // Build the Filepath
    const filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extracting the extention
    let extname = path.extname(filepath);

    //Creating the Content-Type
    let contentType = 'Content-Type text/html';

    //Checking to set the correct Content-Type
    switch(extname) {
        case '.js':
            contentType = 'Content-Type text/js';
        break;
        case '.css':
            contentType = 'Content-Type text/css';
        break;
        case '.json':
            contentType = 'Content-Type application/json';
        break;
        case '.jpg':
            contentType = 'Content-Type image/jpg';
        break;
        case '.png':
            contentType = 'Content-Type image/png';
        break;
    }
    
    //Read File 
    fs.readFile(filepath, (err, content) => {
        if(err) {
        if (err.code == 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
        res.writeHead(200, contentType);
        res.end(content)
    });
    }
    else{
        //Some Server Error
        res.writeHead(500);
        res.end('Sorry a Server Error Occured' + err.code);
    }
}
    else {
        //Sucess
        res.writeHead(200, contentType);
        res.end(content)
    }
    })
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



