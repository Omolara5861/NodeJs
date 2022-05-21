//File System
const path = require('path');
const fs = require('fs')

//Creating a Folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created..');
// });

//Creating a file
    // fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), '', err => {
    //     if (err) throw err;
    //     console.log('File created..');
    // });

    //Creating a file and writing to it
    // fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
    //     if (err) throw err;
    //     console.log('File created and written to..');
    // });

    //Appending to a file 
        // fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'This is Node Crash Course', err => {
        //     if (err) throw err;
        //     console.log('File appended to..');
        // });

    
    //Reading a file
    // fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    //Renaming a file
        // fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'renamed.txt'), err => {
        //     if (err) throw err;
        //     console.log('File Renamed!');
        // });