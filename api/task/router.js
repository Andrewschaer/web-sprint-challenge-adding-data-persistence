const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(allTasks => {
            res.status(200).json(allTasks);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask);
        })
        .catch(next);
});

module.exports = router;