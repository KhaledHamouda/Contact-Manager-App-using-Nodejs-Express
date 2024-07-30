const express = require('express');
connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()

// Mongoose connection
connectDb()

const app = express();

// Api routes.
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/contacts',contactRoutes)
app.use('/users', userRoutes);


//running the server
const port = process.env.PORT || 3030
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})