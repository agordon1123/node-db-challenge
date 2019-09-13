const express = require('express');
const Projects = require('../models/projects-model');
const Tasks = require('../models/tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            projects.map(project => {
                if (project.completed === 1) {
                    project.completed = "true"
                } else {
                    project.completed = "false"
                }
            })
            return res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getTasksForProject(id)
        .then(tasks => {
            tasks.map(task => {
                if (task.completed === 1) {
                    task.completed = "true"
                } else {
                    task.completed = "false"
                }
                return res.status(200).json(tasks)
            })
        })
        .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
    const newProject = req.body;
    Projects.addProject(newProject)
        .then(success => res.status(201).json(success))
        .catch(err => res.status(500).json(err));
});

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const newTask = req.body;
    newTask.project_id = id;
    Tasks.addTask(newTask)
        .then(success => res.status(201).json(success))
        .catch(err => res.status(201).json(err))
});

module.exports = router;
