const hookUpApiEndpoints = require('./hookUpApiEndpoints');
const hookUpStaticFiles = require('./hookUpStaticFiles');

function hookUpEndpoints(app) {
  hookUpApiEndpoints(app);
  hookUpStaticFiles(app);
}

module.exports = hookUpEndpoints;