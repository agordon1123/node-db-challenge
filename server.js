const express = require('express');
const projectsRouter = require('./api/routers/projects-router');
const resourcesRouter = require('./api/routers/resources-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;
