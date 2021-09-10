const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(allResources => {
            res.status(200).json(allResources);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(next);
});

module.exports = router;