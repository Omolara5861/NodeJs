const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/services', (req, res) => {
    res.send('These are the services I offer')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me')
})


const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});