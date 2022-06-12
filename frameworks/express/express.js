const express = require('express');

const PORT = process.env.PORT || 4300;


express.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});