const { v4: uuidv4 } = require('uuid');

// Users
let users = [];

// Get all users
const getUsers = (req, res) => {
    res.send(users);
}

// Add a new user
const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
};

// Get a user by ID
const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
        res.send(foundUser);
    } else {
        res.status(404).send(`User with the id ${id} not found`);
    }
};

// Delete a user by ID
const deleteUser = (req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id !== id);
  
    res.send(`User with the id ${id} deleted from the database`);
  };

  const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
  
    const user = users.find((user) => user.id === id);
  
    if (user) {
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (age) user.age = age;
  
      res.send(`User with the id ${id} has been updated`);
    } else {
      res.status(404).send(`User with the id ${id} not found`);
    }
  };
module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser

}