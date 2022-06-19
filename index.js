const path = require('path');
const express = require('express');

const app = express();



const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});