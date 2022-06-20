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

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Members API Routes
app.use('/api/members', require('./router/api/members'));

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});