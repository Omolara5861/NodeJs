const path = require('path');
const express = require('express');

const app = express();

// This is not n ideal way of loading files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//use() is the method used to include middlewares
// Sets public s the static folder
app.use(express.static(path.join(__dirname, 'public')))

// Dealing with JSONs in express 
const members = require('./Members');
// Route to get the members
app.get('/api/members', (req, res) => res.json(members));



const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});