const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const connectDB = require('./db'); // Import MongoDB connection function
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 5000;
// Middleware to enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
// Connect to MongoDB
connectDB();
app.use('/users', usersRoutes);

app.get('/',(req, res)=>{
res.send('Hello From HomePage')
})

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`))





