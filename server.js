const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const colors = require('colors');
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5040;
require('dotenv').config();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// CONNECT TO MONGO DB
mongoose.connect('mongodb://localhost:27017/token-auth-2', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, () => {
    console.log('Connected to the DB!' .random)
});

// ROUTES
app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressJwt({ secret: process.env.SECRET }));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    if(err){
        console.error(err);
        return res.status(500).send({ errMsg: err.message})
    };
});

// LISTEN TO PORT
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}` .rainbow)
})