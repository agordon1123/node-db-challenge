const db = require('../../data/db-config');

module.exports = {
    addTask,
};

function addTask(newTask) {
    return db('tasks')
        .insert(newTask)
};
