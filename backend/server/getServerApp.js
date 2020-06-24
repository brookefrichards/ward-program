function getServerApp() {
  const express = require('express');
  const hookUpEndpoints = require('../hookUpEndpoints/hookUpEndpoints');
  const app = express();

  hookUpEndpoints(app);

  return app;
}

module.exports = getServerApp;