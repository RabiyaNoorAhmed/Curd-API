require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the MONGO_URL from environment variables
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    // Log error if connection fails
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
