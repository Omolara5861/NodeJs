const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const members = require('./Members')
const app = express();

// This is not n ideal way of loading files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Handlebars Template Engine
// Register `hbs.engine` with the Express app.
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

// Render Template View
app.get('/', (req, res) => {
    res.render('index', {
    title: 'Members API Rendered with Express Handlebars',
    members
})
})

//use() is the method used to include middlewares
// Sets public s the static folder
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
// const logger = require('./reference/middleware/logger');
// Initing the middleware
// app.use(logger);

//Members API Routes
app.use('/api/members', require('./router/api/members'));

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});