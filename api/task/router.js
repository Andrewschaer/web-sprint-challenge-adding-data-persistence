const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json('TBD')
});

router.post('/', (req, res, next) => {
    res.status(201).json('TBD')
});

module.exports = router;