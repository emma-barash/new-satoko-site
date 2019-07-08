const express = require('express');
const imageRouter = express.Router();
const Img = require('../models/image.js');

imageRouter.post('/', (req, res, next) => {
    const newImg = new Img(req.body);
    Img.save((err, image) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(image);
    });
});

imageRouter.get('/', (req, res, next) => {
    Img.find((err, image) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(201).send(image)
    })
})

imageRouter.delete('/:_id', (req, res, next) => {
    Img.findByIdAndRemove((err, deletedImg) => {
        if(err){
            res.status(500);
            return next(err);
        };
        return res.status(200).send(deletedImg);
    });
});

module.exports = imageRouter;