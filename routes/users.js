const express = require('express');
const {createUser,getUsers, getUser, deleteUser,updateUser } = require('../controllers/users')
const router = express.Router();



// Get all users
router.get('/', getUsers);


// Add a new user
router.post('/', createUser);

// Get a user by ID
router.get('/:id',getUser);

// Delete a user by ID
router.delete('/:id',deleteUser );

// Update a user by ID
router.patch('/:id', updateUser);

module.exports = router;
