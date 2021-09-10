const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(allProjects => {
            res.status(200).json(allProjects);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(next);
});

module.exports = router;