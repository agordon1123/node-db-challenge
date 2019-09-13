const server = require('./server');

const port = process.env.PORT || 6900;

server.listen(port, () => console.log(`***Server listening on port ${port}***`));
