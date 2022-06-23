const express = require('express');
const router = express.Router();
// Dealing with JSONs in express 
const members = require('../../Members');
const uuid = require('uuid');
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

// Add new Member
router.post('/', (req, res) => {
    // New Member Variable
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    
    // checking if name and email field was added
    if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Pls include the name and email of the member'});
    }
    members.push(newMember);
    // res.json({msg: 'Member added successfully', members});
    res.redirect('/');
})

  // Update member 
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;

        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                res.json({msg: 'Member updated successfully', member});
            }
        })

    }
    else {
        res.status(400).json({msg: `Cannot update member. there is no member with the id ${req.params.id}`})
    }
});

// Delete member 
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({msg: 'Member deleted Successfully', members: members.
        filter(member => member.id !== parseInt(req.params.id))})
    }
    else {
        res.status(400).json({msg: `Could not not delete member, member with the id ${req.params.id} does not exist`})
    }
});

module.exports = router;