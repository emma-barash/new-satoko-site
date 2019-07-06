const express = require('express');
const authRouter = express.Router();
const User = require('../models/user.js');

authRouter.post('/', (req, res, next) => {
    const newUser = new User(req.body.toLowerCase());
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedUser);
    })
})

module.exports = authRouter;

