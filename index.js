const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req, res)=>{
res.send('Hello From HomePage')
})

app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`))
