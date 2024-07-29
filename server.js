const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

const port = process.env.PORT || 3030

const contactRoutes = require('./routes/contactRoutes');

// app.use(express.json());
app.use('/contacts',contactRoutes)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

