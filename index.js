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

// Middleware
// const logger = require('./reference/middleware/logger');
// Initing the middleware
// app.use(logger);

// Dealing with JSONs in express 
const members = require('./Members');
const req = require('express/lib/request');
// Route to get the members
app.get('/api/members', (req, res) => res.json(members));

// Getting single member 
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member found with the id ${req.params.id}`})
    }
});

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});