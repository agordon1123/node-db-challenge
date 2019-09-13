const express = require('express');
const Resources = require('../models/resources-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    const newResource = req.body;
    Resources.addResource(newResource)
        .then(success => res.status(201).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
