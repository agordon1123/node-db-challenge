const express = require('express');
const projectsRouter = require('./api/routers/projects-router');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter);
