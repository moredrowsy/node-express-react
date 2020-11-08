require('./providers/setEnv');
const express = require('express');

const middlewareRouter = require('./providers/middlewareRouter');
const apiRouter = require('./providers/apiRouter');
const webRouter = require('./providers/webRouter');

// Server app
const app = express();

// Register routers for middleware, API, and web. Order matters!
app.use(middlewareRouter);
app.use('/api', apiRouter);
app.use('/', webRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port', Number(port)));
