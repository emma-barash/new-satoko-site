const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500);
            return next(err);
        };
        if(user !== null){
            res.status(400);
            return next(new Error('Sorry mum, you already have an account under this name'))
        }
    })
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500);
            return next(err);
        };
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ user: savedUser.toObject(), token });
    });
});

authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500);
            return next(err);
        };
        if(!user){
            res.status(500);
            return next(new Error('Sorry mum, that username, password, or both are incorrect'))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500);
                return next(err);
            };
            if(!isMatch){
                res.status(401);
                return next(new Error('Sorry mum, that username, password, or both are incorrect'))
            };
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({ user: savedUser.toObject, token })
        });
    });
});

module.exports = authRouter;

