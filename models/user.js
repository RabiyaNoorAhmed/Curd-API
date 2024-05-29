const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      age: {
          type: Number,
          required: true
        }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
