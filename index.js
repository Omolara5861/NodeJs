const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
}); 

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server Listening on port ' + PORT);
})