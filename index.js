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
    
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))