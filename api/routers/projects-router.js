const express = require('express');
const Projects = require('../models/projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
