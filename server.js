const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const colors = require('colors');
const PORT = process.env.PORT || 5000;


// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// CONNECT TO MONGO DB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, () => {
    console.log('Connected to the DB!' .random)
});

// ROUTES
app.use('/login', require('./routes/authRouter.js'));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    if(err){
        console.error(err);
        return res.send({ errMsg: errmessage})
    };
});

// LISTEN TO PORT
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}` .rainbow)
})