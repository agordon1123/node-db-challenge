const server = require('./server');

const port = process.env.PORT || 6900;

server.listen(port, () => `***Server listening on port ${port}***`);
