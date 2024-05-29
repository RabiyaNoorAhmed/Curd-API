const User = require('../models/user');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Add a new user
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !lastName || !age) {
      return res.status(400).send("All fields (firstName, lastName, age) are required.");
    }

    const user = new User({ firstName, lastName, age });
    await user.save();
    res.send(`User with the name ${firstName} ${lastName} added to the database!`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get a user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send(`User with the id ${req.params.id} not found`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.send(`User with the id ${req.params.id} deleted from the database`);
    } else {
      res.status(404).send(`User with the id ${req.params.id} not found`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !lastName || !age) {
      return res.status(400).send("All fields (firstName, lastName, age) are required.");
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { firstName, lastName, age }, { new: true });
    if (updatedUser) {
      res.send(`User with the id ${req.params.id} has been updated`);
    } else {
      res.status(404).send(`User with the id ${req.params.id} not found`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser
};
