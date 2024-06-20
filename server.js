const { join } = require('path');
const ghost = require('ghost');
const express = require('express');

const app = express();
const ghostApp = ghost({
  config: join(__dirname, 'config.production.json')
});

ghostApp.then((ghostServer) => {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(app);
});

module.exports = app;
