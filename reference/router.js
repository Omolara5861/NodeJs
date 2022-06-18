const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html')
})


const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});