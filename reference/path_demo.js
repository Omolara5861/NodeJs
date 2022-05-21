//Refrence of some of the Node Core Module for Path
const path = require('path');

//Base Filename
console.log(path.basename(__filename));

//Directory Name 
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));

//Concatenating paths
console.log(path.join(__dirname, 'index', 'hello.html'));