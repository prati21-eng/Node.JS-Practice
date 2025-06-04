const express = require('express');
const connectDB = require('./db');
const User = require('./models/user')
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

connectDB();
app.get('/',(req , res)=>{
    res.send("Welcome to my second project ");
})

app.use('/users', userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})