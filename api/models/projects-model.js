const db = require('../../data/db-config');

module.exports = {
    getProjects,
    getTasksForProject,
    addProject,
};

function getProjects() {
    return db('projects')
};

function getTasksForProject(id) {
    return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .select('tasks.description', 'tasks.completed', 'projects.name as project_name', 'projects.description as project_description')
    .where({ project_id: id }) 
};

function addProject(newProject) {
    return db('projects')
        .insert(newProject)
};
