const express = require('express');
const router = express.Router();
// Dealing with JSONs in express 
const members = require('../../Members');
// Route to get the members
router.get('/', (req, res) => res.json(members));

// Getting single member 
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member found with the id ${req.params.id}`})
    }
});